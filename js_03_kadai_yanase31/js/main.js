// <有酸素運動（エアロバイク）>

var msg;
var number;
var count = 0;
var timer_id;

function startShowing() {
   count = 0;
   number = document.getElementById("number").value;
   document.getElementById("startcount").disabled = true;
   countup();
}

function stopShowing() {
   count = 0;
   clearTimeout(timer_id);
   document.getElementById("startcount").disabled = false;
}

function countup() {
   count ++;
   document.getElementById("PassageArea").innerHTML = count;
   // console.log(count % number);
   if(count % number == 0){
      sound1();
   }else{
      sound2();
   }
   timer_id = setTimeout(countup,1000);
}

function sound1(){
	var id = 'sound-file1';
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ){
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}

function sound2(){
	var id = 'sound-file2';
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ){
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}



// 「記録する！」を押したら、キャラクター・部位・エアロバイクの時間をテーブルに表示


$('#kirokusuru').click(function(){

   // // セレクトボックスで選択したキャラクター
   const text = $('#checkbox_chara option:selected').val();

   // //  チェックボックスで選択した鍛えた部位
   const bui = [];
   $('input[name=bui]:checked').each(function(){
      bui.push($(this).val());
      $('#buihyouji').text(bui);
      });
   
   // // エアロバイクを漕いだ時間を四捨五入（小数点第一位へ）   
   const shishagonyuu = Math.round((count /60)*10)/10;


   // エアロバイクを漕いだ時間をキャラごとに合計する


   var robinmask = [];
      robinmask.push(shishagonyuu);
      var robinmaskTotal = robinmask.reduce((sum,element) => sum + element,0);
   
   if(!(text === "ロビンマスク")){
      var robinmaskTotal = 0;
      // console.log(robinmaskTotal)
   }

   var warzman= [];
      warzman.push(shishagonyuu);
      var warzmanTotal = warzman.reduce((sum,element) => sum + element,0);

   if(!(text === "ウォーズマン")){
      var warzmanTotal = 0;
   }

   var ramenman= [];
      ramenman.push(shishagonyuu);
      var ramenmanTotal = ramenman.reduce((sum,element) => sum + element,0);
   
   if(!(text === "ラーメンマン")){
      var ramenmanTotal = 0;
   }


   var terryman= [];
      terryman.push(shishagonyuu);
      var terrymanTotal = terryman.reduce((sum,element) => sum + element,0);

   if(!(text === "テリーマン")){
      var terrymanTotal = 0;
   }

   var buffallo= [];
      buffallo.push(shishagonyuu);
      var buffallomanTotal = buffallo.reduce((sum,element) => sum + element,0);
   
   if(!(text === "バッファローマン")){
      var buffallomanTotal = 0;
   }

   var ashuraman= [];
      ashuraman.push(shishagonyuu);
      var ashuramanTotal = ashuraman.reduce((sum,element) => sum + element,0);

   if(!(text === "アシュラマン")){
      var ashuramanTotal = 0;
   }

   var yanase= [];
      yanase.push(shishagonyuu);
      var yanaseTotal = yanase.reduce((sum,element) => sum + element,0);

   if(!(text === "柳瀬公秀")){
      var yanaseTotal = 0;
   }
   


   // if(text === "ロビンマスク"){
   //    var robinmask= [];
   //    robinmask.push(shishagonyuu);
   //    var robinmaskTotal = robinmask.reduce((sum,element) => sum + element,0);
   // }else if(text === "ウォーズマン"){
   //    var warzman= [];
   //    warzman.push(shishagonyuu);
   //    var warzmanTotal = warzman.reduce((sum,element) => sum + element,0);
   // }else if(text === "ラーメンマン"){
   //    var ramenman= [];
   //    ramenman.push(shishagonyuu);
   //    var ramenmanTotal = ramenman.reduce((sum,element) => sum + element,0);
   // }else if(text === "テリーマン"){
   //    var terryman= [];
   //    terryman.push(shishagonyuu);
   //    var terrymanTotal = terryman.reduce((sum,element) => sum + element,0);
   // }else if(text === "バッファローマン"){
   //    var buffallo= [];
   //    buffallo.push(shishagonyuu);
   //    var buffallomanTotal = buffallo.reduce((sum,element) => sum + element,0);
   // }else if(text === "アシュラマン"){
   //    var ashuraman= [];
   //    ashuraman.push(shishagonyuu);
   //    var ashuramanTotal = ashuraman.reduce((sum,element) => sum + element,0);
   // }else if(text === "柳瀬公秀"){
   //    var yanase= [];
   //    yanase.push(shishagonyuu);
   //    var yanaseTotal = yanase.reduce((sum,element) => sum + element,0);
   // }

    // 選択したキャラに応じて、エアロバイクを漕いだ時間を取得する
   

   // Firebaseに保存
   newPostRef.push({
      youbi:text,
      bui:bui,
      biketime:shishagonyuu,
      robin:robinmaskTotal,
      warz:warzmanTotal,
      ramen:ramenmanTotal,
      terry:terrymanTotal,
      buffallo:buffallomanTotal,
      ashura:ashuramanTotal,
      yanase:yanaseTotal
   })
   // ここにクリックするを押した後に、入力済みの値を空にするコードを書く

   
  

   // データをオブジェクトで保存
   // var datalist = {youbi:text, bui:bui, time:shishagonyuu}

   // JSONデータに変換して登録
   // localStorage.setItem("setdata", JSON.stringify(datalist));

   // JSONデータに戻して取得
   // var d = JSON.parse(localStorage.getItem("setdata"));


   // テーブルに表示
   // const html = `
   // <tr>
   //      <td>${text}</td>
   //      <td>${bui}</td>
   //      <td>${shishagonyuu}</td>
   //    </tr>`;
   // $('#list').append(html);

});



// データ受信
newPostRef.on("child_added", function(data){
   let v = data.val();
   let k = data.key;
   let str =`
   <tr>
        <td>${v.youbi}</td>
        <td>${v.bui}</td>
        <td>${v.biketime}</td>
      </tr>`;
   $('#list').append(str);

   let robin = v.robin
   let warz = v.warz
   let ramen = v.ramen
   let terry = v.terry
   let buffallo = v.buffallo
   let ashura = v.ashura
   let yanase = v.yanase

   // console.log(robin)
   // console.log(warz)
   // console.log(ramen)
   // console.log(terry)
   // console.log(buffallo)
   // console.log(ashura)
   // console.log(yanase)


   var mydata6 = {
      labels: [
          "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
      ],
      datasets: [
          {
              label: "単位：分",
              hoverBackgroundColor: "rgba(255,99,132,0.3)",
              data: [robin,warz,ramen,terry,buffallo,ashura,yanase],
          }
      ]
   };
   
   var options6 = {
      title: {
          display: true,
          text: "エアロバイクを漕いだ時間（累計）"
      },
      ticks: {
         suggestedMin: 0,
         suggestedMax: 5.0
      }
   };
   
   var canvas6 = document.getElementById('stage');
   var chart6 = new Chart(canvas6,{
      type: 'bar',
      data: mydata6,
      options: options6
   });

});

// function charaBikeTime (){
//    if(text === "ロビンマスク"){
//       var robinmask = [];
//       robinmask.push(shishagonyuu);
//       var robinmaskTotal = result.reduce((sum,element) => sum + element,0);
//       console.log(robinmaskTotal)
//       return robinmaskTotal;
//  }
// }

// // 「clear」を押したら最終行を削除
// $('#kuriasuru').click(function(){
//    localStor
//    age.clear();
//    $('tr:last').remove();
// });


/* 鍛えた部位の割合を円グラフで表示_キャラクター別 */


// 胸の順位
// var mydata1 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "鍛えた部位の割合（累計）",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [65,50,50,50,50,50,48],
//        }
//    ]
// };

// var options1 = {
//    title: {
//        display: true,
//        text: "「胸」の順位"
//    }
// };

// var canvas1 = document.getElementById('rank_mune');
// var chart1 = new Chart(canvas1,{
//    type: 'pie',
//    data: mydata1,
//    options: options1
// });


// // 肩の順位
// var mydata2 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "鍛えた部位の割合（累計）",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [65,50,50,50,50,50,48],
//        }
//    ]
// };

// var options2 = {
//    title: {
//        display: true,
//        text: "「肩」の順位"
//    }
// };

// var canvas2 = document.getElementById('rank_kata');
// var chart2 = new Chart(canvas2,{
//    type: 'pie',
//    data: mydata2,
//    options: options2
// });


// // 腕の順位
// var mydata3 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "鍛えた部位の割合（累計）",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [65,50,50,50,50,50,48],
//        }
//    ]
// };

// var options3 = {
//    title: {
//        display: true,
//        text: "「腕」の順位"
//    }
// };

// var canvas3 = document.getElementById('rank_ude');
// var chart3 = new Chart(canvas3,{
//    type: 'pie',
//    data: mydata3,
//    options: options3
// });


// // 腹筋の順位
// var mydata4 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "鍛えた部位の割合（累計）",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [65,50,50,50,50,50,48],
//        }
//    ]
// };

// var options4 = {
//    title: {
//        display: true,
//        text: "「腹筋」の順位"
//    }
// };

// var canvas4 = document.getElementById('rank_fukkinn');
// var chart4 = new Chart(canvas4,{
//    type: 'pie',
//    data: mydata4,
//    options: options4
// });


// // 脚の順位
// var mydata5 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "鍛えた部位の割合（累計）",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [65,50,50,50,50,50,48],
//        }
//    ]
// };

// var options5 = {
//    title: {
//        display: true,
//        text: "「脚」の順位"
//    }
// };

// var canvas5 = document.getElementById('rank_fukkinn');
// var chart5 = new Chart(canvas5,{
//    type: 'pie',
//    data: mydata5,
//    options: options5
// });



/* エアロバイクを漕いだ時間の累計を棒グラフで表示_キャラクター別 */



// var mydata6 = {
//    labels: [
//        "ロビンマスク","ウォーズマン","ラーメンマン","テリーマン","バッファローマン","アシュラマン","柳瀬公秀"
//    ],
//    datasets: [
//        {
//            label: "単位：分",
//            hoverBackgroundColor: "rgba(255,99,132,0.3)",
//            data: [60,50,50,50,50,50,48],
//        }
//    ]
// };

// var options6 = {
//    title: {
//        display: true,
//        text: "エアロバイクを漕いだ時間（累計）"
//    }
// };

// var canvas6 = document.getElementById('stage');
// var chart6 = new Chart(canvas6,{
//    type: 'bar',
//    data: mydata6,
//    options: options6
// });


