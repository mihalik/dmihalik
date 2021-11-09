---
title: 'Windows Media Connect'
date: '2004-10-13'
---

![mediaconnect.PNG](/images/mediaconnect.PNG)

I've been waiting for this for a while. I noticed Windows Media Connect as an option in Windows Update today. [Steve Makofsky](http://www.furrygoat.com/PermaLink.aspx?guid=d9ff21e7-2f2f-4dc9-b0ac-1510d9914e43) noticed it last night and is hoping it works with the D5 Connected DVD Players, too.

I've played with it for a few minutes tonight with some success.

When you first fire up Media Connect, it finds the UPNP media devices on your network. It recognized my D2730 as â€œDevice1â€œ. At least it recognized it. I then selected the directories of media I wanted to share and that's it. I was a little disappointed that I could not select media on a network share. It runs as a service in the background and serves up the media I just shared. I fired up the DVD player to see how it likes it.

The DVD player found Media Connect just fine. And lists it's standard â€œMusic, Pictures, Videosâ€œ menu. I tried music first. Seems to work great. I've not tried an internet stream yet, but music seems to work fine. Next, I tried pictures (saving the most difficult for last). Pictures seem to work fine, too.

Movies, are another story. Most of my movies did not work. The D2730 is only able to play MPEG movies. The D5 software transcodes all the other formats into MPEG to play. From reading [a document](http://www.microsoft.com/whdc/device/netAttach/WMconnect.mspx) Steve pointed to, it looks like the software can transcode video. I was hoping the the DVD player would tell Media Connect that it needs to transcode the movies. No such luck.The property window for â€œDevice1â€œ is empty. Next I need to dig into the configuration files for Media Connect devices to see if there's any way to set it by hand.

So, if you are only interested in playing music and looking at pictures, Media Connect is a great alternative to the D5 software. I'm gonna play with it a little more over the next few days to see if I can get the video transcoding working correctly.

[](file://192.168.1.110/download)
