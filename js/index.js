var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let product= async()=>{
    try{
      let copon = ""
      let res = await axios('http://localhost:3000/result')
      console.log(res);
      copon = res.data.map((elem)=>{
        console.log(res.data);
        return `  <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane active bg-white py-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row">
          <div class="col-2 align-self-center ">
            <img src="${elem.logo}" alt="blobank">
          </div>
          <div class="col-6">
            <h5 class="my-5"> ${elem.title}</h5> 
            <p>${elem.description}</p>
            <div>
              <span class="btn-sm btn btn-outline-secondary  px-3 " style="border-right: 4px solid #188574;"> کد تخفیف</span>
              <span class="text-danger mx-3" style="font-weight: bold;">${elem.valid}</span>

            </div>
          </div>
          <div class="col-4 text-center  align-self-center">
            <button class="btn btn-success  px-5 rounded-5  ">مشاهده</button>
          </div>
          <hr class="w-75 m-auto mt-5" >
        </div>
      </div>
    </div> `
      }
    )
    document.querySelector("#pro").innerHTML+=copon.join('')
    }
    catch(eror){
      console.log(eror.message);
    }
  }
 console.log( product()
);