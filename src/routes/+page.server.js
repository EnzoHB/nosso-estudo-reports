export async function load({ params }) {

	let text = `day,main,domain,start,end,comment,resources,breakpoints
11/5/2024,"Landing, Nav Bar",Design,7h,19h,Criando a Landing Page,0,0
11/8/2024,"Feedback, Statistics Question Modules",Design,17h,22h,Testando os módulos de feedback,0,0
11/11/2024,"Question Side Bar, Question Social Panel, Question Content Panel",Design,7h,19h,Brainstorming Panels Structure,0,0
11/12/2024,"Question Tool Bar, Question Social Panel Comments, Question Content Panel Body, Question Content Panel Full Answer, Question Content Panel Footer",Design,7h,19h,Finishing things due yesterday,0,0
11/13/2024,"OAuth, API, API Keys, Self-hosting",Research,7h,19h,Studying how the oAuth Protocol works whilst figurinh out how to make a public api that has metrics and permissions. Also checking self hosting solutions,0,0
11/14/2024,"Designing Grammar for the Editor, Abstract Syntax Tree, Syntax Tree",Research,9h,19h,"Figuring out how am I going to store the editor document in a database, whats the best format (should I use plain HTML, XML, JSON) and whats the best and consolidated structure of doing so (Google Docs approach seems perfect for my case)",How Discord Renders Rich Messages on the Android App,0
11/15/2024,"Google OAuth2.0 Protocol Authentication, Grammar for the editor, Reading OAuth2.0 Protocol, Hashing",Research,7h,22h,Studying the oAuth2.0 standard by implementing Google APIS authentication. Reading the whole standard to get a full grasp of it. Researching which access token should use (JWT). Figuring out a way to safely store them in the database base in order to prevent attacks. Researching criptography implamentations.,https://medium.com/leonard-cyber/how-really-to-store-your-users-passwords-and-api-tokens-which-are-passwords-5132cec8835b;  https://crackstation.net/hashing-security.htm; https://developers.google.com/identity/protocols/oauth2/web-server#httprest; https://developers.google.com/identity/protocols/oauth2/web-server; https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66; https://github.com/bitwiseshiftleft/sjcl?tab=readme-ov-file; https://datatracker.ietf.org/doc/html/rfc6749#section-3.1,0
11/16/2024," Fine Grained Block Permissions, User Roles, Document Permission",Code,7h,19h,"Iterating over different approaches for block editor with fine grained block permission scopes such as view, edit, share, react and so on. Also, trying to stablish a model for user roles and in-document permissions. Failed miserably and delegated task to the next day.",0,0
11/17/2024,Strongly Typed Event Driven Structured Node Tree with Middlewares,Code,7h,9h,"Finally settling for a strongly typed event driven node tree with middlewares. Similar to how a HTML would work in the sense that events bubble up, but block internal operations such as adding a child or moving it up in a array also triggers events. This will allow for example, a observer to respond to any changes in a nested child so we can change properties like last updated by for individual nodes that propagate up to the document. However, I still haven't solved the problem of fine grained permissions for individual blocks, which I think will be feasible once the data structure is implemented.",0,0
11/17/2024,"Schema, ReordableArray",Code,21h40,23h40,"Implementing the Rigid in a sense that every class has to follow a pre-defined schema that throws if it doesn't. Also, creating an Array that can swap elements within.",0,0
11/18/2024,"Center Panel, Left Panel, Right Panel, Navigation Bar, Sketch, Manifesto",Design,7h,21h30,Writing the project manifesto and redisgning the UI to comply with Functionalities 2.3,0,0
11/19/2024,Left panel,Design,7h,9h30,Creating a better navigation system for UI left panel based of figma-s comment section,0,0
11/19/2024,Project Scope,Research,10h,14h30,Defining project scrope and elaborating action plan,0,0
11/20/2024,"Schema, Proxy",Code,7h,20h30,"Coding the main type structure of the STED STN. I took a different approach for the previous implementation. It kinda looks like an interface so I wonder if it would be less painful to just learn typescript or jsdoc once and for all. Nonethless, everything seems to be working just fine. Now, the only caveat is the separtion of concerns of the functions that is really mind bogling me. Also, took a look in the Proxy API documentation, I wasn't aware it existed",0,breakpoint
11/21/2024,schema,Code,8h,18h15,"Basically a back and forth non-stop with this class that has plagued my whole existence. It is so damn annoying getting it to work, but at last nonetheless I think I found out what was making it work unexpectedly. Basically, I was trying to hand down state instead of returning it and assigning in the variable (in a recursion to even make me look more fool). However, I didn't not figure it out yet and dispite having worked for about 30 hours only in this function, it is far from being either optimazed nor maintainable long term. The next step will be to refactor each and every single one of its components into folders as I understimated how a pain in the ass would a thousand lines file be. Failed miserably  delegating this task for 2 days into the future.",0,0
11/21/2024,schema,Code,20h,22h30,"Prototyping refactoring of the class. Went suprisingly well and one of the thousands of bad logic was actually unecessary overhead because the function was not really recursive in objects, because it would left out arrays for a separate handler.",0,0
11/22/2024,assert-is,Code,5h30,6h50,"Developing my own library of asserts and tests, because I got tired of writing exceptions. ",0,0
11/22/2024,"Comment, Comment Actions Popover, Comment Visibility Popover, Comment Remaining Popover, Formulas, Formula User Popover, Formula User Popover AddFriend, Formula Book Popover; Visual Hierarchy",Design,7h30,17h,"Had a lot of different ideas, most of them were already planned, but some rolled in along the way, one of them being science and engineering celebrities across time having special profiles that will be just like normal users, controlled programatically through the API or through an UI by an administrator, that sends messages in special times in the forums. Got some laughs with Newton and Einstein. Unfortunately, I tried buying the domain today, but, as a minor, I cannot. Fine, I will just wait a full month before even creating a git repository. That said, there isn't much I can do regarding the implementation of oAuth untill I get the server to mess with the http headers.",https://dribbble.come,0
11/23/2024,"Product Popover Testimonial, Removing Product Popover testimonial",Design,6h30,9h30,"Spent some time tweakling the interface, because something just wasn't right about the way the product preview poped up. I ended up designing a testimonial, but later asked myself: why the heck a product testimonial in a product preview, as it is meant to be literally a preview not a whole view? So I ended up removing it later.",0,0
11/23/2024,Input Styling,Research,9h30,10h45,"After I finished the product popover, I went on designing the formulas extensible panel. Turns out it would be waaay harder than I firstly thought. So, I researched a lot about input styling and in the mid time, this reasearch elucidated some aspects that made the UI look clunky and figured it was the lack of room to breath. Then, I created another page, took some inspiration from some crypto websites and got to work. Now, I am a little bit happier with the result, though it means I will have to redesign everything I did yesterday. However, as it became more consistent - because now I am using something called a design system - I reckon it will be faster and won't take so long, judging half a period later I did twice as much work than yesterday. ",https://www.setproduct.com/blog/input-ui-design;https://dribbble.com/shots/23471891-Fullmoon-Cryptocurrency-Dashboard;https://dribbble.com/shots/19614098-E-Commerce-website-e-commerce-Product-Page ,0
11/23/2024,Formula,Design,11h30,14h15,Redesigning the right side bar because I was literally felling claustrophobic.,0,0
11/23/2024,Formula,Design,16h30,19h44,"Fucking awesome. I took a different approach. The right side bar was genuiely so clustered I caught myself holding my breath a few times. Now it has much mroe padding, a lightweight look and room, plus, by doing this way, I some aspects of the UI that were still cloudy in my mind regarding implementation suddenly came to life. ",0,0
11/23/2024,Formula,Design,21h15,22h41,Finishing 3/4 of the details. Somehow I just cant fit the book  within a space the doesn't it make look rushed,0,0
11/24/2024,Schema,Code ,5h30,14h30,Once more working on the literal backbone of everything,0,0
11/24/2024,Schema,Code,15h40,19h20,"Holy shit, I didn't even know you could acess the constructor from any arbirtary thing. I was reading about Remote Code Execution, as users will be able to create their own documents and the properties they send will have to be validated before acessed, when I saw a snippet from eslint node security that showed me something really weird. At first, I thought it was something from previous implementations, but, as it turns out, it is so insecure that my own eslint doesn't even show it and, therefore, I had no ideia it even existed. Thats why this means that everything has to be structured and strongly typed as I said in earlier comments. But regarding the schema, I am actually unsure if the use of proxies would be advisible, although they essentialy obly me to use another object and not a constructor, undermining my backend developer qualitiy of life and taking a toll on readability. However, I can similate the proxies by using Object.seal() and defining the getters and setters I want to be used. I think this will allow for more flexibility and a long term intuitive approach. When someone comes to develop with me, they will be used to the inheritance syntax and won't acutally worry about the schema implementation. ",0,0
11/25/2024,Schema,Code,5h20,9h30,"Well, after some ground breaking exploration regarding proxies I settled for them and to be honest it was the best decision I have ever made. They are so flexible to work with and not only provide a true proximity with the native methods, but they also allow seamlessly error handling right out of the box without any modification of the logic. This has literally just expaanded the boundaries of what I thought I had known previously regarding these methods. However, one of the problems I still have is that I had to compromise modifiers, though in my honest opinion they were not a good ideia anyways. So, that said, the not extensibility of the array is going to be delegated to an abstraction that will sit on top of the schema class",0,0
11/25/2024,Schema,Code,12h20,17h30,"Literally, almost finished. There are some minor minor details that have to be implemented in order for everything to be working. I reckon a dozen more hours and it will be error proof and well tested enough so that I can move on.",0,0
11/25/2024,Schema,Code ,18h,20h04,"FUCKING AMAZING I FUCKING DID IT. I actually had forgotten the feeling of getting something to work after about what? 60 hours or so. It is working wonders and one of the main things that literally made me smile non-stop is that what I had been designing is so good, that errors that otherwise would have been a pain in the ass to find, now literally just pop up in a very descriptive manner. Comparing to what I had just a few days ago, where I couldn't have access to the call stack because everything was thrown and caught without regard for the line where it happened, I really almost cried of seeing everything working beautifully. Now, I have to code a few dozen tests for class to ensure I will not break it, and, afterwards, I will be able to create the Block abstraction for the editor. To be honest, I am so tired that I didn't even test each edge case. So I am saying it is working, though I am not so sure because I just closed vs code and will only think about it again in 2 days.",0,0
11/26/2024,Formula,Design,6h30,12h,Integrated most part of the formula funcionality although right now I am trying to figure out a way to put the conversor without too much screen polution,0,0
11/26/2024,"Firebase, Hosting Providers",Research,14h00,18h20,"Fucking frustated. Most of the websites that are out there essentialy charge about $25 for a mid-sized instance with little or no provisions. As this app is meant to have complex behavior, I think I will not be able to escape from literally buying a VPS when I want to develop in production. Thank got ssl certificates are free and will allow me to host this thing on my computers anyways. The only problem is going to be cache, as I will probably have to pay for a CDN anyways.",0,0
11/26/2024,"Static IP, Containerization, Claro FIBRA para empresas, Nginx",Research,18h20,19h20,"I am a fucking genius. Basically I went from having to spent a lot, with very limitied resource to have to spend what I will already spend whilst having virutally unlimited resources. Sometimes I wonder how smart one has to be to beat my clever solutions to totally unrelated problems.",0,0
11/27/2024,"Formula Third Variable, Formula Recent Search, Formula Autocomplete, Feature Review Manifesto, Frequência, Feature Review - Drawer de Fórmulas",Design,7h,19h,"Writing feature review workflow, writing frequency of features sent to review, finishing and polishing the Formula design. ",0,0`

    // const asset = await fetch('./report.txt');
    // const text = await asset.text();
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

export const prerender = true