import React from "react";

export default function RightSideBar() {
    return (
        <div class="rightcontainer">
            <section class="searchbar">
                <div class="searchicon"><i class="fa fa-search" aria-hidden="true"></i></div>
                <input type="text" name="search" id="searchbox" placeholder="Search Twitter" />
            </section>

            <section class="twittermedia">
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1" /></div>
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1" /></div>
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1"/></div>
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1"/></div>
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1"/></div>
                <div><img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="media1"/></div>
            </section>

            <section class="nigeriatrends">
                <div class="headertrends">
                    <h2>Nigeria Trends</h2>
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
    )
}