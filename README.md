<div align="center">

<img alt="evolt ecommerce logo" src="public/favicon.svg" width="150px" height="150px" />

# Evolt-Prime 📺

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ac9a6ef-5511-4f30-b805-412e65dd7a40/deploy-status)](https://app.netlify.com/sites/evolt-prime/deploys)

</div>

![chrome-capture (17)](https://user-images.githubusercontent.com/61556757/162183422-71842fa8-1b55-4a80-8e50-4c8d9fa1684c.gif)


## Table of Contents

- [About](#about)
- [Technologies used](#-technologies-used)
- [Features](#features)
- [Live link](#live-link)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Connect with me](#-connect-with-me)

## About
 - Evolt-Prime is a video library for headphone reviews. Watch quality reviews for your headphones at one place.

## 🛠 Technologies used
- ReactJS
- [Polaroid](https://polaroid7.netlify.app/index.html) component library
- React Router

## Live link
[Evolt-Prime](https://evolt-prime.netlify.app/)

## Features
**Home Page**: 
- The home page consists of different categories, clicking them navigates the user to the video listing page with that category applied as a filter.

**Video Listing (Explore)**
- On this page, users can see all the videos and can watch the video by clicking on them. User can:
    - Apply different filters for videos
    - Search for any video
    - Can create a playlist and add a video in it
    - Can add video in watch later

**Video details**
- After a user clicks on any video in video listing page, it will navigate to this page, where user can:
  - Watch the video
  - Can like the video
  - Add the video into watch later, playlist and can create a playlist
 
 **Playlist Management**
 - On this page user can view all the playlists.
 - On clicking on any one open's that playlist, where user get option to:
    - Delete the playlist
    - Remove video from playlist

**Watch later**
- Users can add any video into watch later if a video is already in watch later then the user can remove it.

**Like video**
- Users can like any video, if the video is already liked then the user can remove it from liked videos.

**History**
- Once the user watches the video it gets added to watch history. On the history page, the user can clear all history.

**Authentication**
- Evolt-Prime also has login, signup and logout feature
  - For Signup, form validation is done for all the fields.


## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **evolt-video-library** folder

```sh
https://github.com/rohanmathur91/evolt-video-library.git

cd evolt-video-library
```

- Install dependencies (if you are using **yarn** then do with that)

```sh
npm install
```

- Create a `.env` file at the root level of the directory (at the level of `package.json`) and create a environment variable

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

- Start the server🚀

```
npm start
```

## Screenshots
![image](https://user-images.githubusercontent.com/61556757/162183850-f6bcb91d-63dc-4ebc-8b84-92c3e0c3d71a.png)
![image](https://user-images.githubusercontent.com/61556757/162183887-fab68bcb-a318-49e4-95c0-b7fd0d7151db.png)
![image](https://user-images.githubusercontent.com/61556757/162183979-998f6cbe-a145-4355-af61-c946799306e5.png)
![image](https://user-images.githubusercontent.com/61556757/162184099-1475dbd0-3a6c-4bc1-9e6f-1895f056254a.png)


## 👨‍💻 Connect with me 

<a href="https://twitter.com/rohanmathur91"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/rohanmathur04/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
