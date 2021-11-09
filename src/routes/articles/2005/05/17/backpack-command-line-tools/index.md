---
title: 'Backpack Command Line Tools'
date: '2005-05-17'
---

I've been using [Backpack](http://www.backpackit.com/) quite a bit for the past two weeks. Buying a house (see [Jessie's blog](http://www.jessieferguson.com/PermaLink.aspx?guid=4a7eb43f-f1b8-4230-b528-9ecf1e27529e)), planning for moving, and starting to plan a wedding gives us quite a few lists of things to do an things to keep track of. The list of Todo items and Journal entries I keep at work is all controlled by an [AutoHotKey](http://www.autohotkey.com) script I wrote. I wanted to to similar things with Backpack. But, the first thing I needed was some command-line Backpack tools.

So, with the release of today's [Backpack API](http://www.backpackit.com/api), I whipped some up [two quick tools in .NET](http://dmihalik.com/files/CommandLineBackpack.zip). Nothing really great, just the abilty to add to lists and list all things in a list from the command line. You'll need the .NET Framework installed to use these files. I wrote them for myself so there's not much error checking, but someone else might find it useful.

First, you'll need to edit backpack.xml. Replace "username" with your username and "token" with your token found on your account page. Once you do that, keep the xml file in the same directory as the exe's and you can run the following commands:

bpadd.exe pageid "The text you want to add" Example: bpadd.exe 3645 "Pick up some milk at the store."

bplist.exe pageid Example: bplist.exe 3645

That's about it. I'll probably be adding more of the functions at I need them, but it gave me the ability to quickly add something using AutoHotKey or Slickrun.[commandlinebackpack.zip](http://dmihalik.com/wp-content/uploads/2008/01/commandlinebackpack.zip 'commandlinebackpack.zip')
