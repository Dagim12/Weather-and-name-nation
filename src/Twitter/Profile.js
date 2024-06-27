import React from "react";
import { Calendar } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { Chat } from 'react-bootstrap-icons';
import { Repeat } from 'react-bootstrap-icons';
import { HeartFill } from 'react-bootstrap-icons';
import { Upload } from 'react-bootstrap-icons';
const postContent = (post)=>{
    return <div className="mytweets">
        <div><img src={post.user.profilePicture} alt="avi" class="avi" /></div>
        <div class="tweetbody">
            <div>{post.user.name} {post.user.userName} Feb.12</div>
            <div class="tweetcontent">{post.zPost}</div>
            <ul class="retweeticons">
                <Chat className="rt-icon"/>
                <Repeat  className="rt-icon" />
                <HeartFill  className="rt-icon"/>
            </ul>
        </div>
    </div>
} 
export default function Profile(props) {
    console.log("Logged")
    let posts = props.user.post;
    return(
    <div className="col-md-8">
        <div class="flexcontainer">
        <div class="middlecontainer">
            <section class="headsec">
                <i class="fa fa-arrow-left" id="fa-arrow-left" ></i>
                <div>
                    <h3>{props.user.name}</h3>
                        <span>{props.user.posts} Posts</span>
                </div>
            </section>
            <section class="twitterprofile">
                <div class="headerprofileimage">
                    <img src={props.user.headerPicture} alt="header" id="headerimage" />
                    <img className="rounded-circle" src={props.user.profile_picture} alt="profile pic" id="profilepic" />
                    <button type="button" class="btn btn-outline-dark editprofile text-white mt-4 btn-sm">Edit Profile</button>
                </div>
                <div class="bio">
                    <div class="handle">
                        <h3>{props.user.name}</h3>
                        <span>{props.user.userName}</span> <br />
                        <span>  <Calendar />&nbsp;Joined {props.user.joinedDate}</span>
                    </div>
                    <div class="nawa">
                        <div class="followers"> {props.user.following} <span>Following</span></div>
                        <div>{props.user.followers}<span> Followers</span></div>
                    </div>
                </div>
            </section>

            <section class="tweets">
                <div class="heading">
                    <button className="btn  selected">Posts</button>
                    <button className="btn  twit-btn">Replies</button>
                    <button className="btn  twit-btn" >Media</button>
                    <button className="btn twit-btn">Likes</button>
                </div>
            </section>
            <section className="">
                {posts.map((zPost) => postContent(zPost))}
                
            </section>
        </div>
        <div class="rightcontainer">
                <section class="searchbar">
                    <div class="searchicon"><Search /></div>
                    <input type="text" name="search" id="searchbox" placeholder="Search" />
                </section>

                <section class="twittermedia">
                    <div className="headertrends col-md-12"><h2>You might like</h2></div>  
                    
                    <div class="trenditem1">
                        
                        <div class="trending"><img className="rounded-circle w-35 h-35" src="./wo.jpg" alt="media1" /></div>
                        <div className="to-folow">
                            <div class="hashtag"> Segun Olanitori</div>
                            <div class="trending"> @kebe</div>
                        </div>
                        <button className="btn btn-light btn-sm  follow-btn">Follow</button>
                    </div>  
                    <div class="trenditem1">
                        
                        <div class="trending"><img className="rounded-circle w-35 h-35" src="./pupy.jpg" alt="media1" /></div>
                        <div className="to-folow">
                            <div class="hashtag"> Segun Olanitori</div>
                            <div class="trending"> @zefe</div>
                        </div>
                        <button className="btn btn-light btn-sm  follow-btn">Follow</button>
                    </div>  
                    <div class="trenditem1">
                        
                        <div class="trending"><img className="rounded-circle w-35 h-35" src="./pupy.jpg" alt="media1" /></div>
                        <div className="to-folow">
                            <div class="hashtag"> Segun Olanitori</div>
                            <div class="trending"> @werqe</div>
                        </div>
                        <button className="btn btn-light btn-sm  follow-btn">Follow</button>
                    </div>  
                </section>

                <section class="nigeriatrends">
                    <div class="headertrends">
                        <h2>Trends for you</h2>
                        <i class="fa fa-cog" id="fa-cog"></i>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 1 Trending</div>
                        <div class="hashtag"> Segun Olanitori</div>
                        <div class="trending"> 9054767 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 2 Trending</div>
                        <div class="hashtag"> Olanitori Olusegun</div>
                        <div class="trending"> 104767 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 3 Trending</div>
                        <div class="hashtag"> Segun</div>
                        <div class="trending"> 97367 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 4 Trending</div>
                        <div class="hashtag"> #Loremipsum</div>
                        <div class="trending"> 84767 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 5 Trending</div>
                        <div class="hashtag"> Olanitori </div>
                        <div class="trending"> 7476 Tweetsg</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 6 Trending</div>
                        <div class="hashtag"> SegunOS</div>
                        <div class="trending"> 6477 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 7 Trending</div>
                        <div class="hashtag"> Segun_OS </div>
                        <div class="trending"> 54767 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 8 Trending</div>
                        <div class="hashtag"> Soy Segun</div>
                        <div class="trending"> 44762 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 9 Trending</div>
                        <div class="hashtag"> #Loremipsum</div>
                        <div class="trending"> 3476 Tweets</div>
                    </div>
                    <div class="trenditem">
                        <div class="trending"> 10 Trending</div>
                        <div class="hashtag"> #Loremipsum</div>
                        <div class="trending"> 247 Tweets</div>
                    </div>
                    <div class="showmore">
                        <a href="#" style={{padding: '25px', color: 'royalblue'}}>Show more</a>
                    </div>
                </section>

            </div>
        </div>
    </div>
    )
}