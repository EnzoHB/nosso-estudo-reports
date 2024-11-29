// @ts-nocheck
// @ts-ignore
import report from '../lib/report/report.txt'
import { read } from '$app/server'

export async function load({ params }) {

    const asset = read(report)
    const text = await asset.text();
    const rows = text.split('\n');
	
    const headers = rows.shift().trim().split(',')

    const reversed = rows.reverse();
    const entries = new Map();

    for (let row of reversed) { 

        const regExp = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/
        const entry = row.trim().split(regExp).reduce((acc, value, index) => (acc[headers[index]] = value, acc), {});
	
		const date = new Date(entry.day)
		const ds = date.toDateString();

		if (!entries.has(ds))
			entries.set(ds, { things: {}, intervals: [] });

		const day = entries.get(ds)
		
		const things = entry.main.replaceAll(`"`, '').split(',').map(thing => thing.trim());
		const duration = handleDuration(entry.day, entry.start, entry.end);

		const avg = duration.long / things.length;

		for (let thing of things) {

			thing = thing.toLowerCase();

			if (!day.things[thing])
				day.things[thing] = 0;

			day.things[thing] += avg
		}

		day.intervals.push({ things, duration, comment: entry.comment.trim().replaceAll('"', ''), domain: entry.domain.toLowerCase() })
    };

	return { entries: JSON.stringify(Array.from(entries.entries())) };
}

function handleDuration(date, start, end) {

	start = start.toLowerCase().replace('min').split('h').map(e => +e);
	end = end.toLowerCase().replace('min').split('h').map(e => +e);

	let startTime = new Date(date);

	startTime.setHours(start[0])
	startTime.setMinutes(start[1])

	let endTime = new Date(date);

	endTime.setHours(end[0])
	endTime.setMinutes(end[1])

	return {
		start: startTime.getTime(),
		end: endTime.getTime(), 
		long: endTime.getTime() - startTime.getTime(),
	}
};