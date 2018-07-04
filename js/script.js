var urls = ["./images/image1.jpg", 
                "./images/image2.jpg", 
                "./images/image3.jpg", 
                "./images/image4.jpg", 
                "./images/image5.jpg", 
                "./images/image6.jpg", 
                "./images/image7.jpg", 
                "./images/image8.jpg"];    
    PhotoGalleryLib.onSizeClassChange(changeSize);
    function changeSize(size){
        console.log(size);
        var oldTable = document.getElementById("imagesGrid");
        if(oldTable != null){
            oldTable.parentNode.removeChild(oldTable);
        }
        var table = PhotoGalleryLib.generateGrid(urls,size);
        var parent = document.getElementById("mainBody");
        parent.appendChild(table);    

        PhotoGalleryLib.addImageClickHandlers(createModal);
        function createModal(no){
            PhotoGalleryLib.createModal();
            PhotoGalleryLib.initModal(function(){
                PhotoGalleryLib.closePresentationModal();
            },function(){
                no = (no - 1) % 8;
                if ( no < 0 )
                    no += 8;
                var prevNo = no + 1;
                PhotoGalleryLib.setModalImgSrc("./images/image" + prevNo + ".jpg");
            },function(){
                no = (no + 1) % 8;
                var nextNo = no + 1;
                PhotoGalleryLib.setModalImgSrc("./images/image" + nextNo + ".jpg");
            });
            var realNo = no + 1;
            PhotoGalleryLib.setModalImgSrc("./images/image" + realNo + ".jpg");
            PhotoGalleryLib.openPresentationModal();
        } 
    }
    function showSlide(){
        PhotoGalleryLib.createModal();
        var no = 0;
        var showNo = no + 1;
        PhotoGalleryLib.setModalImgSrc("./images/image" + showNo + ".jpg");
        no ++;
        PhotoGalleryLib.openPresentationModal();
        var id = setInterval(frame, 1000);
        function frame(){
            if(no > 7){
                clearInterval(id);
                no = 0;
                PhotoGalleryLib.closePresentationModal();
            }
            else{
                showNo = no + 1;
                PhotoGalleryLib.setModalImgSrc("./images/image" + showNo + ".jpg");
                no ++;
            }
        }
    }