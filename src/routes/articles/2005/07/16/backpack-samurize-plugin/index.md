---
title: 'Backpack Samurize Plugin'
date: '2005-07-16'
---

![backpacksamurize.JPG](/images/backpacksamurize.JPG)I've been using a couple Ruby scripts and [Serious Samurize](http://www.samurize.com) to display my [Backpack](http://www.backpackit.com/) todo items on my desktop for a few weeks now. Today I decided to cut the scripts and work on a Backpack Samurize plugin. Here's the intial release of the plugin. Currently, it only has the abiltity to list todo items for one page, but that is all I need right now. If others are interested I'll add things like notes, reminders, and the ability to get todo items from every page.

The screenshot to the right is the config I use (with some fake todo items). It's very simple but it gets the job done. I"m sure this could be integrated into a much more complicated config. Just read the readme in the zip file for instructions on how to use the plugin.

**Note:** The default refresh rate for plugins seems to be '0' which I think means "as fast as possible". Since each time this is called it's making a web request to the Backpack site, you need to set this to something very reasonable or the 37Signals people will probably not be too happy with you.

**Update**: There is now a [newer version](http://dmihalik.com/PermaLink,guid,12ee2b3f-54b0-490c-b589-7d1efde1109a.aspx). Please check it out.
