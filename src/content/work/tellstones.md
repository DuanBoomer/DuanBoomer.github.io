---
title: "TellStones: The King's Gambit"
publishDate: 2021-09-01 00:00:00
img: /assets/tellstones/image.png
img_alt: two kings shaking hands depicted as a game based illustration
description: |
  This is the computer version of a board game by Riot Games (creators of League of Legends and Valorant)
tags:
  - Game Dev
  - Ursina Engine
  - Board Game
---
<br>[![PyPI Downloads](https://img.shields.io/badge/repository_link-brightgreen?style=for-the-badge)](https://github.com/DuanBoomer/Tellstones-3.0)

## What is tellstones?
It is a board game by [Riot games](https://www.riotgames.com/en), the creators of 
[League of Legends](https://www.leagueoflegends.com/en-us/?utm_source=riotbar&utm_medium=card1%2Bwww.tellstones.com&utm_campaign=lol&utm_content=lol_key01), 
[Teamfight Tactics](https://teamfighttactics.leagueoflegends.com/en-us/?utm_source=riotbar&utm_medium=card3%2Bwww.tellstones.com&utm_campaign=tft_set4&utm_content=blue_pengu01), 
[Valorant](https://playvalorant.com/en-us/?utm_source=riotbar&utm_medium=card4%2Bwww.tellstones.com&utm_campaign=val&utm_content=val_jett01) and 
[Legends and Runeterra](https://playruneterra.com/en-us/?referrer=singular_click_id%3D61b25be9-518f-420c-9b71-7be141c8b8e5&utm_campaign=lor_set5a&utm_content=teemo_key01&utm_medium=game6+www.tellstones.com&utm_source=riotbar). 
They are not only a hit game studio with millions of users, but a multimedia company with there roots into the music, comic books, board games and animated movies business. They have created a Emmy winning animated series, [Arcane](https://arcane.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&utm_source=riotbar) too.
There board game was launched in 2020, ([launch video](https://www.youtube.com/watch?v=ah8nW2pyOvk&t=1s&ab_channel=LeagueofLegends)). According to riot games, `"This is more than a memory game"` and `"You have to play the player not the game"`, are some statements made about there board game. The rules of the game can be viewed here, ([video](https://www.youtube.com/watch?v=p0lol1-Xt3Q&ab_channel=LeagueofLegends)).
## What have I made?
I have made a digital version of tellstones to play with my brother back in `2021`. At the time I was still grounding my roots into programming and problem solving in general. This turned out to be a quite a interesting project, with `3 versions` of this game being made, first with `Turtle`, than `PyGame` and than `Ursina`, before posting the final bare minimum version to GitHub. Later I realised that using `Ursina` was a bit overkill for such a small project but 🤷‍♂️ huh, nevermind now.

_I don't know how to embed a video in markdown and the solutions online don't work, so here is a link to it -> [demo video](/assets/tellstones/gameplay-tellstones.mp4)_

**Note**

_After downloading it again in `2023` on my new laptop I have realised that I forgot to push some changes I made later to the game to the [GitHub repo](https://github.com/DuanBoomer/Tellstones-3.0), hence the version you will see here and on GitHub is the bare minimum version._

_The changes included -_
- _a user menu_
- _dragging & dropping the stones on the line_
- _swapping of stones using drag-drop_
- _right click on stone to open a radial menu with hide and unhide options_
- _saving and loading games._

## Why I made a digital version?
It was quite simple, I didn't have 30 USD to buy the board game, and I really wanted to play it, so I made a digital version of it using the rules inferred from the youtube video and rulebook. Also all the images have been cropped out of the rulebook and enhanced using various tools, that's why you may see that some images are a bit blurry while others are sharper.

## How I made this?
I made this using `Ursina`, a 3D graphics engine written purely in python. According to my understanding it is a wrapper over `Panda3D` using various parser packages to convert files like `.psd` and `.blender`. Even though the game is 2D, I choose this as it provided much more smoother transitions and generalized functionality.

## How it works, the logic?
We will segregate this section based on the moves permitted in the game.
### Fundamentals
#### Place
In this move we take a stone from the pool and place it on the line starting from the center. This is one of the fundamental moves. The key here is to make the stones clamp to some specific positions on the line and ensure that there is always a stone to the left or right of a stone being placed, if not than it must be the first stone being kept on the line and hence, must clamp to the center position only.

#### Hide
This is also one of the fundamental moves which control the flow of the game. We can hide the stone by changing the image being displayed with the image of a flipped stone. Here you can hide a stone by pressing the `a` key.
![img](/assets/tellstones/image5.png)

#### Swap
In this move we swap the position of two stones doesn't matter face up or face down. Here we use the mouse to point to the stone to be swapped, hovering will also do. Next press the arrow keys, right or left, to determine the direction of the swap, than swap the x-positions of the two stones.
![img](/assets/tellstones/image3.png)

#### Peek
This move enables a player to look at a stone without having the opponent knowing about it. This was replaced by another move by me, called show, in which both the players are able to look at a stone together. This is the counterpart move for Hide.
![img](/assets/tellstones/image6.png)

### Non Digital Moves
#### Challenge
This is a non-digital move, in this one player challenges the other to correctly name a stone placed on the line. At the end of this move the stone is turned upward/showed.
#### Boast
This is also a non-digital move, in this one player says that he can name all the hidden stones placed on the line. If he is able to do so, the player wins else looses. In either case the game ends.
## How you can play it?
You can play this game in your local machine by cloneing the repo from [GitHub | Tellstones | Chirag](https://github.com/DuanBoomer/Tellstones-3.0). Ursina requires python 3.10 to properly work, so make sure you have that installed, I recommend using anaconda for this as it allows you to have a different version of python for each environment. You can view [this](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-with-commands) to learn how to make environments with specific python versions in anaconda.


Than run the following commands after activating your environment, use only pip to install download ursina not conda or miniconda as it is not available on the general market, you may however specify your market while installing but i found that pip works just fine.
```
pip install ursina 
```

Than go to the root project and run the python file, you can run the file from cmd as follows. 
```
python -u ".\Tellstones-3.0\TELLSTONES_3.0.py"
```
## Conclusion
We have successfully created a digital version of Tellstones:The King's Gambit. You can now also play it with your brother or sister.

[![PyPI Downloads](https://img.shields.io/badge/Made%20with%20%F0%9F%92%96%20by-Chirag-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/DuanBoomer)