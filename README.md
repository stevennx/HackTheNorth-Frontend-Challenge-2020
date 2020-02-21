# Hack the North 2020 Frontend Developer Challenge

## Installation
#### 1. Enable WebGL on browser https://superuser.com/questions/836832/how-can-i-enable-webgl-in-my-browser
#### 2. Clone the repo 
```
git clone https://github.com/stevennx/HackTheNorth-Frontend-Challenge-2020.git
```
#### 3. Install dependencies and Run 
```
cd HackTheNorth-Frontend-Challenge-2020
npm i 
npm start
```
#### 4. Enter credentials
```
Email: testing@gmail.com
Password: password
```

Check it out live! https://stevennx.github.io/HackTheNorth-Frontend-Challenge-2020/

## Tech Stack
- React & Styled Components
- Redux & Sagas
- Swal2
- Typescript
- JQuery Ripple Plugin

## Writeup Part 1
### Design & Development
An app that keeps pesky non-hackers out while displaying the profile of other hackers should have solid functionality with an appealing UI. Given the time constraint, I decided that a login page and a profile page is sufficient enough to meet our goals. As a result, most of my time was spent to ensure a solid UX flow for our hackers. 

### Features & Explainations
1. **User Auth & Persistant Session w/ Redux & LocalStorage** - We want to persist state after refresh and why not setup redux while we're at it! 

2. **No User Logout** - More of a bug turned feature, as for now there isn't really any use in storing sessions so not being able to log out isn't a huge issue atm. If anything with our redux & sagas wireframe, authentication with JWT wouldn't be difficult to setup! 

3. **Null Response triggers Swal2 Modal** - If somehow our data was corrupted and the backend did return null unintentionally, sending the request again on a button click would make it seem like the user flow did not sudddenly come to a halt.

4. **Image click retrieves another Profile** - Going back to the impact of having a solid flow, since most users will be on mobile, the easiest and most intuitive action of changing profiles (besides swiping) would be to tap on the profile again! 

5. **Profile Actions** - For each action, there's a special interaction, whether it's a switch or increment/decrement buttons. Except thre is no functionality to call a phone number (Unfinished Implementation)!


### Issues & Accomplishments
1. **UI Design** - Single-handedly one of the most time-consuming yet satisfying tasks. This design is far from perfect and I am definitely not a designer lol. My inspiration came from this login modal from [Stefan](https://dribbble.com/shots/9777114-ReaQta-Login-Page) along with their [website](reaqta.com/hive)!

2. **Hexagonal Web Background** - ReaQta's background and ripple animations were part of a video, so feels bad man. In order to make my own, I had to use [Dudely's work](https://codepen.io/dudleystorey/pen/YwdYxq) along with [this beauty](https://htmlcsstoimage.com/) to make my custom background! 

3. **Ripple Effect** - It just so happened that there was a [JQuery Plugin](https://www.npmjs.com/package/jquery.ripples) just for ripple animations! Although it's not the same as Stefan's design, we can all appreciate a rippling swimming pool as our background LOL. Making the ripple start at the Logo/Image wasn't too bad, but resizing the page would mess up the starting coordinates of the ripples! Also, adding delays between each ripple proved to be too difficult to perform in a React Hook! Fortunately, all I had to do was abstract the ripple events to our redux-sagas and hook Window resize Event Listeners to signal our sagas on a page resize!

## Writeup Part 2
### Roadmap
Since we've already setup redux and redux-sagas, along with a file structure that's easily adjustable to scale to over a hundred components, we'll look at other forms of optimization! 
1. **Lazy Loading** - Even though we're only hitting one endpoint right now, in the future as this App grows, lazy loading using React Loadlable will be key to a fast user experience.

2. **SSR & SEO** - If we do plan to release this App to the public to gain more users, having SSR for SEO will be a great help, but we have to keep in mind performance issues and finding the right balance of SSR and CSR.

3. **Smaller Bundle Sizes** - Small optimizations such as only including lodash.get instead of the entire lodash module would prove to be a great improvement! 

### Extra
1. **Phone Call Functionality** - I did not implement restricting/allowing phone calls, but my approach would be to spawn Swal notifications and even extending it to use Twillio's API to make real phone calls.

2. **Logout** - Since we don't have a logout button, we have to clear session storage and refresh. Go to Chrome Devtools->Applications->Local Storage->Delete! 


