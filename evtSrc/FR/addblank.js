(function() {

  var getLink = document.getElementsByTagName('a'),
    linkL = getLink.length;
  try {
    for (var i = 0; i < linkL; i++) {
      // console.log(getLink[i]);
      if(getLink[i].className === 'btn')
      getLink[i].target = "_blank";
    }
  } catch (e) {
    if (console) {
      console.log(e);
    }
  }

})();
