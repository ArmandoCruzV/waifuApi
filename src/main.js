const URL_API = 'https://api.waifu.im/search/?included_tags=waifu';


async function load(){
  const res = await fetch(URL_API);
  const data = await res.json();
  console.log(data.images[0].url);
  const img = document.createElement('img');
  const btn = document.createElement('input');
  btn.type = 'button';
  btn.value = '😺 Agregar a favoritos 😸';
  btn.id = 'button';
  img.width = 350;
  img.id = 'img'
  img.src = data.images[0].url;
  image.appendChild(img);
  image.appendChild(btn);
  const imgAdd = img.src;


  const button = document.getElementById('button');
  button.addEventListener('click',function(){

    const contador = localStorage.length;
    for(var i=0;i<contador;i++){
      console.log(i)

    } 

    let idWaifu = Object.keys(localStorage);
    let waifuArray =Array.from(idWaifu);
    let nombreRepetido = waifuArray.some(n => n === `waifu${i}`)  
    console.log('holaaaa '+ nombreRepetido)

   if(nombreRepetido){
      i=i+10;
      console.log(i+ 'lo logre????')
      localStorage.setItem(`waifu${i}`,imgAdd)
    }
    else {
      localStorage.setItem(`waifu${i}`,imgAdd)
    }

    //location.reload();
    const div = document.createElement('div')
    div.id='contImgBnt';
    const img = document.createElement('img');
    img.src= imgAdd;
    img.id = 'favImg';
    favWaifu.appendChild(div)
    div.appendChild(img);
    const btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.id = 'btnDelete';
    btnDelete.value = `Eliminar de favoritos 😵`;
    div.appendChild(btnDelete);

    img.addEventListener('click',function(){
      const all = document.getElementById('all')
      const zoom = document.getElementById('zoom');
      all.style.display = 'flex';
      zoom.src = img.src;
      zoom.style.width = '100vw';
      zoom.style.position = 'absolute';
      zoom.appendChild(zoom);
    })

    const cerrar = document.getElementById('btnZoom');
    cerrar.addEventListener('click',function(){
      const all = document.getElementById('all')
      all.style.display = 'none';
    })
  
    btnDelete.onclick = function(){
      img.remove();
      btnDelete.remove();
      div.remove();
      localStorage.removeItem(`waifu${i}`)
    }
  });
}
load();

function girar(){
  const reLoad = document.getElementById('btnReload');
 if(reLoad.checked = true){
  reLoad.checked = false;
}
}
girar();

function reload(){
  const borrarImg = document.getElementById('img');
  const borrarBtn = document.getElementById('button');
  cargando();

  function cargando(){
    setTimeout(function(){
      load()
      setTimeout(function(){
        borrarImg.remove();
        setTimeout(function(){
          borrarBtn.remove();
          setTimeout(function(){
            girar();
          },1000)
        },0)
      },0)
    },100)
  }
};

function agregarWaifu(){
  for(var w=0;w<localStorage.length;w++){
    const a = Object.entries(localStorage);
  console.log((a[w])[1])
  
  const urlwafi = (a[w]);
  const urlArray  = Array.from(urlwafi);
  const waifuName = urlArray[0];
  
  const div = document.createElement('div')
  div.id='contImgBnt';
    const img = document.createElement('img');
    img.src= (a[w])[1];
    img.id = 'favImg';
    favWaifu.appendChild(div);
    div.appendChild(img);
    const btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.id = 'btnDelete';
    btnDelete.value = `Eliminar de favoritos 😵`;
    div.appendChild(btnDelete);

    img.addEventListener('click',function(){
      const all = document.getElementById('all')
      const zoom = document.getElementById('zoom');
      all.style.display = 'flex';
      zoom.src = img.src;
      zoom.style.width = '100vw';
      zoom.style.position = 'absolute';
      zoom.appendChild(zoom);
    })

    const cerrar = document.getElementById('btnZoom');
    cerrar.addEventListener('click',function(){
      const all = document.getElementById('all')
      all.style.display = 'none';
    })
  
    btnDelete.onclick = function(){
      img.remove();
      btnDelete.remove();
      div.remove();
      localStorage.removeItem(`${waifuName}`)
    }
  }
}
agregarWaifu();

console.log(localStorage)
