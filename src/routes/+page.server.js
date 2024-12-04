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
11/27/2024,"Formula Third Variable, Formula Recent Search, Formula Autocomplete, Feature Review Manifesto, Frequência, Feature Review - Drawer de Fórmulas",Design,7h,19h,"Writing feature review workflow, writing frequency of features sent to review, finishing and polishing the Formula design. ",0,0
11/28/2024,Nosso Estudo Reports,Code,9h30,21h,"Building a simple website tthat displays this exact table, but in a more user friendly way. ",0,0
11/29/2024,Nosso Estudo Reports Github Pages Deployment,Code,6h30,9h30,"Figuring out the things I have to do in order to make the website, which is dinamic, become static. I ended up using a pretty lazy approach, as I am not willing, nor it is the right time to deal with the inner workings of vite an svelte. At any rate, the website is deployed live on my github.",0,0
11/29/2024,Indexing Learning Resources,Research,9h30,14h00,"As I did with my last project, in order to keep things scoped and time constraints manageable, I have to index every single one of the learning resources of the techonologies I will essentialy have to learn from scratch. This process takes about a day, but I managed to do a lot of it already. I have created a fig jam file that described the stack and the general order I will have to learn them, altogether with a spreadsheet that by now has 1600 lines of website headers, subheaders and links to pages.",0,0
11/29/2024,Indexing Learning Resources,Research,16h30,19h40,"Holy shit, I have so much to learn that I doubt I will be able to pull this off in less than three months. Honestly, after indexing everything, things look much bigger than I first thought, so I might have to reschedule updates on design in order to account for that. Actually, I think this is pretty much what I am gonna do. I will take the approach I took in the past that is one topic per day alternating in order, non stop. The only problem is exercises. I will adress those later when I finish indexing WSL, Docker Engine, Docker Build and Docker Compose.",0,0
11/29/2024,"Indexing Learning Resources, Design Inspirations",Research,20h40,23h30,"One of the bottlenecks for what I am developing in my outrageous inability to design things that look great. Don't get me wrong, I know this is a matter of not having enough training data in my mind as I have never got much deeper into the design world, but I will have to find a way to do so and just today I browsed a few websites that looked really cool. Additionally, they have a lot of small coding and designing challeges that I found amazing and they actually were a lot harder than what I first thought. However, my main struggle is with creativity and drawing. I don't fucking know how to draw and I can't seem to find a good resource in order to learn doing so. I have an ideia of how am I going to get better, but for this I will have to spendd a little more money than what I am comfortable with. Not now thought: I have an indexed spreadsheet of all the documentations of the tech stack I will need and they are HUGE.",0,0
11/30/2024,WSL,Research,7h20,11h40,"Reading and figuring out how to set up the WSL on my windows machine, as I plan to use it for double purposes: As a server and a workbench. To be honest, I am loving this approach, because it gives me an excuse to learn things I have always wanted to learn anyways. Reading WSL Manual 0-101/315",0,0
11/30/2024,"WSL, Linux chmod Command",Research,13h14,18h20,"Learning about the configuration files on each of the host machines, that is, windows and wsl through the .wslconfig and wsl.conf respectively",0,0
12/1/2024,"Linux Basic Commands, Installing Docker, Docker Breaking Down Instalation Script Line-by-Line, Linux Creating Users, Linux Modifying Users, Linux Deleting Users, Docker Running Containers as Non Root, Linux grep Command, Linux cat command, Linux tee command, Linux install command, Linux awk package, Docker Storage ",Research,12h30,17h30,"Alright, messed around with a few of linux's commands and actually was able to do some basic stuff such as creating and removing users, running docker as non root users to avoid security reasons (not sure about that still, I will finish reading the documentation in order to give my verdict) and, now, I will pause for a bit, buy things that are running low here and after that, start indexing the elastic search for the search engine (Although by the looks of it, I will have to do this more frequently than not, because with the ever increasing stack I am building and pllaning to use, this will grow and grow non-stop). Somehow, I was so settled for the amount of time I will have to invest that having to increase even more just caused a little panic in my mind. Nothing unmanageable though. ",0,0
12/1/2024,Indexing Learning Resources,Research,18h20,20h00,"Fucking hell, the index I did yesterday is alread outdated because a fucking library updated just dropped yesterday. What a shit show. AW FUCK I AM SO FUCKING ANGRY. LITERALLY HALF OF THE FUCKING INDEX IS JUST FILLED WITH FUCKING ELASTIC SEARCH. THERE ARE JUST SO MANY ARTICLES.",0,0
12/1/2024,Web Scrapping,Code,20h00,23h00,"I wasn't gonna do it, but I need to know how much time to allocate given it's a limited resource. And now I have over 3000 links indexed with all their text saved. I was going to save their html though, but I figured that wouldn't be necessary. I set up 4 parameters and used what I have already done, that is, WSL, to determine a few of them. They are: AVG_READING_SPEED, TRASH_COEFFICIENT, EXERCISE_DRAG, HOURS_SPENT_A_DAY. I managed to put a below avarage reading speed, because it is necessary to comprehend a great deal of it; threw in a 30% trash coefficient, that is, 30% of the text is probably irrelevant; 11x exercise drag, which means that 11/12 of my time is going to be towards experimenting instead of actually reading; and hours dedicated a day. I ended up with a little more than I was initially expecting, nothing unmanageable though.",0,0
12/2/2024,Docker Volumes ,Research,7h,12h00,Learning about docker volumes,0,0
12/2/2024,"Docker Bind Mounts, Docker Tmpfs, Docker Storage Drivers",Research,13h30,18h,Studying the different types of volumes that can be created and mounted into a container. ,0,0
12/2/2024,"Docker OverlayFS, Docker Containerd",Research,20h18,21h55,"Getting in touch with how to overlayFS works as well as important innerworking such as the copy up under the hood operation. Right now, I am getting both bored and, at the same time, annoyed by having to manually write these entries in this tables and upload the file every two weeks. Upon finishing set up, I will have to create a UI with a bare minimum CRUD API that will comunicate with this shitty table and the actual indexed data. However, I cannot display it publicly as it contains fucking copyrighted content.",0,0
12/03/2024,Requesting Static IP,Research,12h00,16h,"Hopping onto a long fucking boring call with my ISP to request static IP, the problem is that they called me and I didn't answer. When they call again, I will probably not answer again. This is some serious retarded shit. Now I haave to stay concentrated on this and allocate memory and processing power. ",0,0
12/03/2024,"Main Questão, Formula Questão Integration",Design,16h,18h31,Polishing main question navigation bar.,0,0`

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