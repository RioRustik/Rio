window.onload = function(){
    // if(sessionStorage.getItem("most1")!==null){
    //     let text = sessionStorage.getItem("most1");
    //     document.getElementsByClassName("hideSecondBlock")[0].classList.remove(text);
    // }
    if(sessionStorage.getItem("most1")!==null){
        let text1 = sessionStorage.getItem("most1");
        document.getElementsByClassName("hideThirdBlock")[0].classList.add(text1);
    }
    // if(sessionStorage.getItem("most4")!==null){
    //     let text3 = sessionStorage.getItem("most4");
    //     document.getElementsByClassName("firstPopupBlock")[0].classList.add(text3);
    // }
    if(sessionStorage.getItem("most2")!==null){
        let text4 = sessionStorage.getItem("most2");
        document.getElementsByClassName("wrap")[0].classList.add(text4); 
    }
    // if(sessionStorage.getItem("most5")!==null){
    //     let text5 = sessionStorage.getItem("most5");
    //     document.getElementsByClassName("hideSecondBlock")[0].classList.add(text5); 
    // }
}
// document.getElementById("key").onclick = function() {
//     if(document.getElementById('key').onclick) {
//         document.getElementsByClassName("firstPopupBlock")[0].classList.add("hideFirstBlock");
//         sessionStorage.setItem('most4', "hideFirstBlock"); 
//         document.getElementsByClassName("hideSecondBlock")[0].classList.add("secondPopupBlock");
//         sessionStorage.setItem('most5', "secondPopupBlock");
//     }   
// }
document.getElementById("key1").onclick = function() {
    if(document.getElementById('key1').onclick){
        // document.getElementsByClassName("hideSecondBlock")[0].classList.remove("secondPopupBlock");
        // sessionStorage.setItem('most1', "secondPopupBlock"); 
        document.getElementsByClassName("hideThirdBlock")[0].classList.add("thirdPopupBlock");          
        sessionStorage.setItem('most1', "thirdPopupBlock"); 
        document.getElementsByClassName("wrap")[0].classList.add("hideFirstBlock");          
        sessionStorage.setItem('most2', "hideFirstBlock"); 
    }  
}