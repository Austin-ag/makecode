var staticScript=document.createElement('script');staticScript.src="https://scripts.assets-landingi.com/popups/local-storage/static.min.js";staticScript.type="text/javascript";document.querySelector('head').appendChild(staticScript);staticScript.addEventListener('load',function(){let sessionRequest=new XMLHttpRequest();sessionRequest.open('POST',"https://stats.landingi.com/api/v2/session");sessionRequest.addEventListener('load',function(){if(this.status===200){let response=JSON.parse(this.response);PopupSession.save(response.lps);let getPopupsRequest=new XMLHttpRequest();getPopupsRequest.open('POST','https://popups.landingi.com/api/v2/landing/add-popups?apikey=6ee59dfc-aa56-47b7-96cf-c681f83b5634&landing=eb3084f86aeaeb8f29db');getPopupsRequest.addEventListener('load',function(){if(this.status===200){let response=JSON.parse(this.response);let addPopupScript=document.createElement('script');addPopupScript.type="text/javascript";addPopupScript.innerText=response.content;document.querySelector('head').appendChild(addPopupScript);PopupCounterCollection.save(response.lpc);PopupVisitCollection.save(response.lpv);}});getPopupsRequest.send(JSON.stringify({url:(new URL(window.location.href)).toString(),lps:PopupSession.get(),lpv:PopupVisitCollection.get(),lpc:PopupCounterCollection.get(),}));}});sessionRequest.send(JSON.stringify({lps:PopupSession.get(),}));});