const shareButtons = document.querySelectorAll('.tile-share-button');
const topShareBtn = document.querySelector('.share-button');

async function copyText(e){
   e.preventDefault();
   const link = this.getAttribute('link');
   try{
        await navigator.clipboard.writeText(link);
        alert("Copied Link Successfully");
   } catch(err){
    console.error(err);
   }
}
shareButtons.forEach(shareButton=>shareButton.addEventListener('click',copyText));

topShareBtn.addEventListener('click',copyText);
