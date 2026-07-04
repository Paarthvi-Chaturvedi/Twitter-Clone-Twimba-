import { tweetsData } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
uuidv4();

const tweetArea = document.getElementById("tweet-area")
const feed = document.getElementById("feed")

function handleTweetBtnClick(){
   if(tweetArea.value === '') return 
   tweetsData.unshift({
      handle: `@Paarthvi`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetArea.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4()
   })
   tweetArea.value = ''
   renderFeed()
}

document.addEventListener('click', function(e){
   if(e.target.dataset.like){
      handleClick(e.target.dataset.like)
   }
   else if(e.target.dataset.retweet){
      handleRetweet(e.target.dataset.retweet)
   }
   else if(e.target.dataset.reply){
      handleReply(e.target.dataset.reply)
   }
   else if(e.target.id === 'tweet-btn'){
      handleTweetBtnClick()
   }
})


function handleClick(tweetId){
   const targetTweetObj = tweetsData.filter(function(tweet){
      return tweet.uuid === tweetId
   })[0]

   if(targetTweetObj.isLiked){
      targetTweetObj.likes--
   }else{
      targetTweetObj.likes++
   }
   targetTweetObj.isLiked = !targetTweetObj.isLiked
   renderFeed()
}

function handleRetweet(tweetId){
    const targetTweet = tweetsData.filter(function(tweet){
      return tweet.uuid === tweetId
   })[0]

   if(targetTweet.isRetweeted){
      targetTweet.retweets--
   }else{
      targetTweet.retweets++
   }

   targetTweet.isRetweeted = !targetTweet.isRetweeted

   renderFeed()
}

function handleReply(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}


function getFeedHtml(){
   let feedHtml = ""
   tweetsData.forEach(function(tweet){

      let likeIconClass = ''
      if(tweet.isLiked){
         likeIconClass = 'liked'
      }

      let retweetClass=''
      if(tweet.isRetweeted){
         retweetClass = 'retweeted'
      }

      let repliesHtml = ''
      if(tweet.replies.length >0){
         tweet.replies.forEach(function(reply){
            repliesHtml +=  `<div class="tweet-reply">
         <div class="tweet-inner">
            <img src="${reply.profilePic}" class="profile-pic">
               <div>
                  <p class="handle">${reply.handle}</p>
                  <p class="tweet-text">${reply.tweetText}</p>
               </div>
            </div>
         </div>`
         })
      }
      feedHtml += `<div class="tweet">
      <div class="tweet-inner">
      <img src="${tweet.profilePic}" class="profile-pic">
      <div>
         <p class="handle">${tweet.handle}</p>
         <p class="tweet-text">${tweet.tweetText}</p>
         <div class="tweet-details">
         <span class="tweet-detail">
            <i class="fa-thin fa-comment-dots" data-reply="${tweet.uuid}"></i>
            ${tweet.replies.length}
         </span>
         <span class="tweet-detail">
            <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
            ${tweet.likes}
         </span>
         <span class="tweet-detail">
            <i class="fa-solid fa-retweet ${retweetClass}" data-retweet="${tweet.uuid}"></i>
            ${tweet.retweets}
         </span>
         </div>   
      </div>            
      </div>
      <div class='hidden' id="replies-${tweet.uuid}">
         ${repliesHtml}</div>
      </div>`
   })
   return feedHtml
   
}

function renderFeed(){
   feed.innerHTML = getFeedHtml()
}
   
renderFeed()
