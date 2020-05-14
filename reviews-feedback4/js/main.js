 function diplay_hide (blockId)
 {
         if ($(blockId).css('display') == 'none')
         {
                 $(blockId).animate({height: 'show'}, 500);
         }
         else
         {
                 $(blockId).animate({height: 'hide'}, 500);
         }}





 var myBtn = document.querySelector('.button')

 myBtn.addEventListener('click', function(){
         diplay_hide('#block_id', 'return', 'false')
 })

 myBtn.addEventListener('click', function(){
         (['_trackEvent', 'Knopka', 'Podtverdit']);
 })