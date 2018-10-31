const https = require('https')
const url = 'https://www.imooc.com/learn/348'    //某教育网站
const cheerio = require('cheerio')
function filterChapters(html){
    let $ = cheerio.load(html);
    let chapters = $('.chapter');
    let courseData = [];
    chapters.each(function(item){
        let chapter = $(this);
        let chapterTitle = chapter.find('h3').text();
        let videos = chapter.find('.video').children('li');
        let chapterData = {
            chapterTitle,
            videos: []
        }
        videos.each(function(item){
            let video = $(this).find('a');
            let videoTitle = video.text();
            let videoId = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                videoTitle,
                videoId
            })
        })
        courseData.push(chapterData)
    })
    return courseData
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        let chapterTitle = item.chapterTitle;

        console.log(chapterTitle + '\n');

        item.videos.forEach(function(video){
            console.log('  【' + video.videoId + '】  ' + video.videoTitle.trim() + '\n')
        })
    })
}

https.get(url,function(res){
    let html = '';
    res.on('data',function(data){
        html+=data;
    })
    res.on('end',function(){
        let courseData = filterChapters(html);
        printCourseInfo(courseData)
    })
}).on('error',function(){
    console.log('爬取出现错误')
})