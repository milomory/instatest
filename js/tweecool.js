/**
 * Created by mil on 20.09.16.
 */

/*Name : TweeCool
 *version: 1.5
 *Description: get the latest tweets from twitter.
 *Website: www.tweecool.com
 *Licence: no licence, feel free to do whatever you want.
 * Author: TweeCool
 */
(function(a){a.fn.extend({tweecool:function(b){var c={username:"tweecool",limit:5,profile_image:true,show_time:true,show_media:false,show_media_size:"thumb"};var b=a.extend(c,b);function d(h){var k=new Date();var o=Date.parse(k);var p=h*1000;var e=(o-p)/1000;var g=1,i=60,j=60*60,n=60*60*24,f=60*60*24*7,l=60*60*24*30,m=60*60*24*365;if(e>g&&e<i){return Math.round(e/g)+" seconds ago"}else{if(e>=i&&e<j){return Math.round(e/i)+" minutes ago"}else{if(e>=j&&e<n){return Math.round(e/j)+" hours ago"}else{if(e>=n&&e<f){return Math.round(e/n)+" days ago"}else{if(e>=f&&e<l){return Math.round(e/f)+" weeks ago"}else{if(e>=l&&e<m){return Math.round(e/l)+" months ago"}else{return"over a year ago"}}}}}}}return this.each(function(){var h=b;var i=a(this);var e=a("<ul>").appendTo(i);var f=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;var g="";a.getJSON("https://www.api.tweecool.com/?screenname="+h.username+"&count="+h.limit,function(k){if(k.errors||k==null){i.html("No tweets available.");return false}if(h.profile_image){var j='<a href="https://twitter.com/'+h.username+'" target="_blank"><img src="'+k.user.profile_image_url+'" alt="'+h.username+'" /></a>'}else{j=""}a.each(k.tweets,function(l,n){if(h.show_time){var m=d(n.timestamp)}else{var m=""}if(h.show_media&&n.media_url){g='<a href="https://twitter.com/'+h.username+'" target="_blank"><img src="'+n.media_url+":"+h.show_media_size+'" alt="'+h.username+'" class="media" /></a>'}else{g=""}e.append("<li>"+j+'<div class="tweets_txt">'+n.text.replace(f,'<a href="$1" target="_blank">$1</a>')+g+" <span>"+m+"</span></div></li>")})}).fail(function(k,l,j){i.html("No tweets available")})})}})})(jQuery);