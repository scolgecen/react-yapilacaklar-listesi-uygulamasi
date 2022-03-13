import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, baslik: "React Çalış", tamamlandi: false },
  { id: 2, baslik: "Pazardan Meyve Al", tamamlandi: false },
  { id: 3, baslik: "Node Js Öğren", tamamlandi: false },
  { id: 4, baslik: "Laravel Set Al", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState('');
  //console.log('YENİ BAŞLIK :' ,yeniBaslik);
  //const [liste,setListe]=useState(INITIAL_STATE);

  const addNew = title =>{
    setListe([...liste,{id:Date.now(),baslik:title,tamamlandi:false}]);
    setYeniBaslik('');
  }
  const markCompleted = (id) =>{
    setListe(liste.map(el =>el.id===id?{...el,tamamlandi:!el.tamamlandi}:el))
  }
  const clearCompleted = () =>{
    setListe(liste.filter(liste=>!liste.tamamlandi))
  }

  return (
    <div className="App" style={{backgroundColor:'gray',padding:'40px',marginTop:'50px',borderRadius:'10px'}}>
      <h3 style={{marginBottom:'40px'}}>Yapılacaklar Listesi</h3>
      <div className="ekleme_formu">
        <input value={yeniBaslik} onChange={(event)=>setYeniBaslik(event.target.value)} placeholer="listeye ekle" />
        <button className="btn btn-sm btn-primary col-md-3 ml-2" onClick={()=>{
          //setListe([...liste,{id:Date.now(),baslik:yeniBaslik,completed:false}]);
          addNew(yeniBaslik);
          
        }}>Ekle</button>
      </div>
      <div className="liste">
      {
        liste.map(item =>(
        <div key={item.id} onClick={()=>{
          markCompleted(item.id)
          }} className={item.tamamlandi?"yapildi":""}>
            <p style={{color:'black',fontSize:'22px',marginTop:'0px',marginBottom:'0px'}}><i class="fa fa-check" aria-hidden="true"></i> {item.baslik}</p>
          </div>
        ))
      }
      </div>
      <button onClick={clearCompleted} className="temizle btn btn-sm btn-danger col-md-8 ml-2">Tamamlananları Temizle</button>
    </div>
  );
}
