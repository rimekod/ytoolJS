
const ytool = {
    create: function(text, link, color){
        var youtubeVideoId = link.split("?v=")[1];
        document.body.innerHTML = document.body.innerHTML +
        `
        <div colorMode="`+color+`" id="youtube-tool" class="youtube-tool">
            <span> <i class="fab fa-youtube"></i> `+text+`</span>
        </div>
        <div id="ytt-cover">
            <a id="ytt-close" class="close"><i class="fas fa-times"></i></a>
            <div class="player">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/`+youtubeVideoId+`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <style>
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
            .youtube-tool {
                font-family: Roboto;
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #FF0000;
                color: #fff;
                padding:10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                border: 1px solid #FF0000;
                user-select:none !important;
            }
            .youtube-tool[colorMode="dark"] {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #282828;
                color: #fff;
                padding:10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                border: 1px solid #606060;
            }
            .youtube-tool[colorMode="light"] {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #fff;
                color: #FF0000;
                padding:10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                border: 1px solid #ddd;
            }
            .youtube-tool i {
                margin-right: 5px;
            }
            #ytt-cover {
                position: fixed;
                top: 0px;
                left: 0px;
                background: rgba(0,0,0,.86);
                width: 100vw;
                height: 100vh;
                z-index: 999;
                display: none;
                justify-content: center;
                align-items: center;
            }
            #ytt-cover .player {
                width: 65vw;
                height: 70vh;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.6);
                overflow: hidden;
            }
            #ytt-cover .close {
                position: absolute;
                top: 5%;
                right: 6%;
                color: #fff;
                font-size: 50px;
                cursor: pointer;
                transition: .15s all;
            }
            #ytt-cover .close:hover {
                opacity: .8;
            }
            @media only screen and (max-width:565px){
                #ytt-cover .player {
                    width: 100vw;
                    height: 70vh;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.6);
                    overflow: hidden;
                }
                .youtube-tool {
                      margin-left: auto;
                      margin-right: auto;
                      left: 0;
                      right: 0;
                      bottom:20px;
                      text-align: center;
                }
            }
        </style>
        `;
        this.others()
    },
    others: function(){
        document.getElementById("youtube-tool").addEventListener('click', function(){
            document.getElementById("ytt-cover").style.display = "flex";
        })
        document.getElementById("ytt-close").addEventListener('click', function(){
            document.getElementById("ytt-cover").style.display = "none";
        })
    }
}
