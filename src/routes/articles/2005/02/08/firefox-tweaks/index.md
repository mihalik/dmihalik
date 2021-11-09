---
title: "Firefox Tweaks"
date: "2005-02-08"
---

I've been using [Firefox](http://www.mozilla.org/products/firefox/) on and off since before it was called Firefox (or even before it was called whatever it was before Firefox). I've always found something that did not work quite like I expected and went back to IE/[MyIE2/Maxthon](http://www.maxthon.com/). I never really spent the time to tweak it to fit my usage requirements. My usage of a web browser is a bit different than most people I know so it might be worth explaining so you can see if these extensions are right for you.

I often find things that I feel like reading but don't really feel like dedicating time to right now. Generally, my browser becomes my â€œinboxâ€ for pages I want to read. I'll open things in background tabs and leave them open till I feel like reading a bunch of pages. It's not uncommon for me to have 10-20 tabs (16 right now) with most of them staying open for days until I feel like checking them out. Once I check it out, if it's worth looking at again, I Spurl it, if not the tab gets closed. I developed this style while using Maxthon, but it works even better with a few tweaks in Firefox.

Aside from getting a setup I like, I've had two frustrations with Firefox. One is the slowness of it going from a minimized state to a usable state (see my fix below). And the other has been the instability caused by [Tabbrowser Extensions](http://piro.sakura.ne.jp/xul/tabextensions/index.html.en). TBE is a great extension for those who want more than just basic tab functionality. I really like it, but it's unfortunately not the most stable (that's even stated on the author's site). I set out to get basically the same setup but without TBE. I'm sure others have experienced similar problems and might be interested in replacing TBE with a few less obtrusive extensions.

**Slowness from minimized state:**

This problem is discussed in [Mozilla bug 76831](https://bugzilla.mozilla.org/show_bug.cgi?id=76831)

The solution is to add a new boolean (config.trim\_on\_minimize) in about::config and set it to false. This causes Firefox to not give up it's memory when it's minimized and therefore it does not take any time to become un-minimized.

**Replacing Tabbrowser Extensions**

It took seven plugins to replace the things I used in Tabbrowser Extensions, but in the end it's a more configurable system that seems to run much better. I hope that eventually the problems with TBE are cleaned up and I can get by with only installing one extension for tabs, but for now I'm ok with the seven. Some of these extensions are somewhat hard to find because they are not listed on the standard Firefox Extensions page. I have included the URL's from the extensions dialog, but I know for a fact some of these links don't work. You may end up having to Google a few. I know I've had trouble duplicating my setup on other computers because it's difficult to find some of these.

[Tabbrowser Preferences](http://www.pryan.org/mozilla/site/TheOneKEA/tabprefs/) Allows you to set some of the tab preferences that you can't change in the standard Firefox UI. Things to change in here are setting Firefox to single window mode and to select how you want links to behave with respect to tabs.

[Open link in...](http://forums.mozillazine.org/viewtopic.php?t=118365) Allows you to turn on "Open link in background tab" or "Open link in foreground tab" context menu items.

[FLST](http://gorgias.de/mfe/) Focus Last Selected Tab. Just like it sounds. When you close a tab, focus goes back to the last selected tab rather than the one to the left.

[Undo Close Tab](http://mozilla.dorando.at/) Another straight forward one. When a tab is closed, you can reopen it. It keeps all the history and everything of the closed tab.

[Session Saver](http://adblock.mozdev.org/sessionsaver) Very important extension. This keeps all your information between sessions. If you close your browser with certain tabs open, those tabs will be open next time you open your browser. It even handles recovery when Firefox crashes.

[Tab Clicking Options](http://twanno.mozdev.org/) Allows you to set various events for when you click on a tab. I use it to set double clicking a tab to close it.

[Menu editor](http://downloadstatusbar.mozdev.org/menuedit/) Allows you to edit the context menu. I trim out a couple things added by "Open link in..." and some other stuff I'll never use.

**Other Important Extensions** These are a few other random extensions I use to add a little extra functionality to Firefox.

[Spurl](http://spurlbar.mozdev.org/index.html) I use Spurl for all my online bookmarks. This plugin adds the SpurlBar and a Spurl button to Firefox.

[SearchWP](http://legege.gelegweb.com/extensions/) One of my favorite features in the Google toolbar is it's creation of clickable entries for all your search terms to find them on the page. This adds the same functionality for Firefox's built-in searchbox. It creates a dynamic toolbar of your search terms. It also adds a highlight button so you can highlight the terms on the page.

[Searchbox Autoupdater](http://legege.gelegweb.com/extensions/) My other favorite feature in the Google Toolbar is it's ability to update it's terms based on what you might have changed in the web page. If you search for a term using the toolbar, and then tweak the search on the Google page, the Google Toolbar would update your terms (and allow for one click searching using the above trick). This extension adds that functionlity. One warning, though. The current version (and older versions) of the Autoupdater has a random crash issue. I've had it crash on my 4-5 times since I've been using it. Personally, I think it's still worth it (especially since Session Saver can recover my current state).

[ResizeSearchBox](http://dragtotab.mozdev.org/resizesearchbox/) Nice little toolbar item that lets you drag the searchbar to make it larger or smaller. I don't use it very often, but it's handy when I need it.

[BugMeNot](http://extensions.roachfiend.com/) BugMeNot.com keeps a list of usernames & passwords for many sites that require you to sign up to read articles (or other things). This plugin allows you to right click on a page to fill in username/password boxes on those sites. It works some of the time and has saved me from signing up for numerous sites I'd probably never go back to. I don't mind signing up for some sites, but sometimes it's just ridiculous.

So that's the list. Hopefully it'll give some other people pointers to allow them to fine-tune their own browsing experience. It'll at least let me recreate my setup on other machines, if need be. There are lots of other tweaks out there to improve browsing performance. I've tried a few tweaks with mixed results. I'm currently quite happy with the performance I'm getting from Firefox right now so I've not done many performance tweaks.
