<script>
    import { onMount } from "svelte";
    import { base } from '$app/paths'


    let { entry, index } = $props();

    let date = new Date(entry[0])
    let body = entry[1]

    // svelte-ignore non_reactive_update
        let longDate = date.toLocaleDateString('pt-BR', {
        dateStyle: 'full'
    })

    longDate = longDate[0].toUpperCase() + longDate.substring(1);

    // --------------------- //

    // svelte-ignore non_reactive_update
    let { things } = body;

    things = Object.entries(things).sort((a, b) => 1)

    /**
     * @param {string} string
     */
    function titleCase(string) {
        return string.trim().split(' ').map(word => word.trim()[0].toUpperCase() + word.substring(1)).join(' ')
    }

    /**
     * @param {number} duration
     */
    function handleDuration(duration) {

        let minutes = duration / 1000 / 60;
        let remainder = minutes % 60;
        let hours = ( minutes - remainder) / 60
        
        remainder = Math.round(remainder)
        hours = Math.round(hours)

        let hoursS = hours !== 1? 's' : ''
        let remainderS = remainder !== 1? 's': '';

        if (!hours)
            return `${remainder} minuto${remainderS}`

        if (!remainder)
            return `${hours} hora${hoursS}` 

        return `${hours} hora${hoursS} e ${remainder} minuto${remainderS}`
    }

    // ----------------------------------- // 

    // Handling timeline

    let intervals = $state(body.intervals);
    // let totalDayDurationInMilliseconds = 24 * 60 * 60 * 1000;
    // let timelineWidth = $state();

    let opacity = 0.3
    let code = `rgba(230, 176, 14, ${opacity})`
    let design = `rgba(15, 214, 42, ${opacity})`
    let research = `rgba(14, 121, 230, ${opacity})`;

    for (let interval of body.intervals) {

        interval.domain = interval.domain.trim();

        if (interval.domain == 'code')
            interval.color = code
        else if (interval.domain == 'design')
            interval.color = design
        else {
            interval.color = research
        }
    }

    // onMount(() => {

    //     for (let interval of body.intervals) {

           
    //     }
    // })

</script>

<div class='card'>
    <div class=header>
        <p class=date>{longDate}</p>
        {#if index < 7}
            <p class=new>Novo</p>
        {/if}
    </div>
    <div class=things-display>
        {#each things as [ name, duration ]}
            <div class='thing'>
                <p class='name'>{titleCase(name)}</p>
                <div style='display:flex; gap:8px'>
                    <img src='{base}/duration.png' width=16px height=16px alt=duration/>
                    <p class='duration'>{handleDuration(duration)}</p>
                </div>
            </div>
        {/each}
    </div>
    <div class=chart-display>
        <!-- <div class='start'>
            <div class='starting dot'></div>
        </div>
        <div class=timeline bind:offsetWidth={timelineWidth}></div>
        <div class='end'>
            <div clas='ending-dot'></div>
        </div> -->
        {#each intervals as interval, index }
            <div class=comment-background style='
                background-color: {interval.color}
            '>
                <p  style='font-weight: 500;font-size: 16px;line-height:24px'>{titleCase(interval.domain)}</p>
                {#each interval.comment.split('.') as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>

    .chart-display {
        position: relative;
    }

    .comment-background {
        padding: 10px;
        border-radius: 10px;
        margin: 8px;
    }

    .comment-background:last-child {
        margin-bottom: 0;
    }

    .start {
        --width: 5px;
        position: absolute;
        left: 0px;
        top: calc(0px - var(--width) / 2);
        background-color: #f2f2f2;
        aspect-ratio: 1;
        width: var(--width);
        border-radius: 1000px;
    }

    .end {
        --width: 5px;
        position: absolute;
        right: 0px;
        top: calc(0px - var(--width) / 2);
        background-color: #f2f2f2;
        aspect-ratio: 1;
        width: var(--width);
        border-radius: 1000px;
    }

    .timeline {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 1px;
        background-color: #f2f2f2;
    }

    .thing {
        padding: 4px
    }

    .date {
        font-size: 12px;
    }

    .name {
        font-size: 16px;
        margin: 0;
        margin-bottom: 8px;
        font-weight: 450;
    }

    .duration {
        margin: 0;
        color: #626262
    }
    
    .things-display {
        display: grid;
        grid-template-columns: 50% 50%;
        row-gap: 24px;
    }

    .card {
		display: flex;
		flex-direction: column;
		gap: 40px;

		border: solid;
		border-color: #f2f2f2;
		border-radius: 10px;
		border-width: 1px;

		width:80%;
		padding: 40px;

		font-size: smaller;
	}

    .header {
        display: flex;
        justify-content: space-between;
    }

    .new {
        background-color: rgba(0, 0, 255, 0.099);
        color: blue;
        padding: 2px 8px;
        border-radius: 10px
    }
</style>