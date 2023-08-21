var models = [
    {
        marka : 'TOYOTA AVENSİS ',
        image : 'resimler/avensis.jpg',
        link  : 'https://www.auto-data.net/tr/toyota-avensis-ii-2.2-d-4d-148hp-3586',
        title : '2005 TOYOTA AVENSİS'
    },

    {
        marka : 'Opel Asta G',
        image : 'resimler/astrag.jpg',
        link  : 'https://www.opel.com.tr/opel-hakkinda/opelden-haberler/opel-astra-g-25-yil-once-yollara-cikti.html',
        title : 'Opel Astra G'
        
    },

    {
        marka : 'Opel Astra H',
        image : 'resimler/opel.jpg',
        link  : 'https://tr.wikipedia.org/wiki/Opel_Astra',
        title : 'Opel Astra H'

    },

    {
        marka : 'Hyundai Accent',
        image : 'resimler/hyundai.jpg',
        link  : 'https://tr.wikipedia.org/wiki/Hyundai_Accent',
        title : 'Hyundai Accent'
        
    },
    
    {
        marka : 'Ford Ranger',
        image : 'resimler/ford.jpg',
        link  : 'https://www.ford.com.tr/ticari-araclar/yeni-ford-ranger',
        title : 'Ford Ranger'

    },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    süre : '3000',
    random : false
};

karısık(settings);

document.querySelector('#left-arrow').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('#right-arrow').addEventListener('click',function(){
    index++;
    showSlide(index);  
    console.log(index);
});

function karısık(settings){

    var prev;
    interval = setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
                prev == index;

        }else{
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }

        showSlide(index);

    },settings.süre)


}

function showSlide(i){
 
    index = i;

    if(i<0){
        index = slaytCount - 1;
    }

    if(i > slaytCount-1){
        index = 0;
    }


    document.querySelector('#avensis').setAttribute('title',models[index].title);

    document.querySelector('#link').setAttribute('href',models[index].link);
    
    document.querySelector('#acıklama').textContent = models[index].marka;
    
    document.querySelector('#avensis').setAttribute('src',models[index].image);
    
}