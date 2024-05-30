---
title: Human Body based Virtual Controller
publishDate: 2024-10-05 00:00:00
img: /assets/tai/profile.jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  The project entails an approach which enables the user to play 1v1 fighting games using body gestures I have used Tekken 3 as my test game but theoretically, it can work for any game.
tags:
  - Gesture Recognition
  - Computer Vision
  - Artificial Intelligence
  - Web App
---

### TAI (Tekken AI) & Web App

The project entails an approach which enables the user to play 1v1 fighting games using body gestures I have used Tekken 3 as my test game but theoretically, it can work for any game.

Essentially what I did was to use Mediapipe's implementation of MobileVNet2 which enables a user to extract 33 landmarks from the human body. Then using some trigonometry I measure the various joint angles.

Quick increments and decrements in angles suggest a move has been made. Then the move is mapped to the keyboard and the keyboard is connected to the game.