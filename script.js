//for displaying 1-d array
function getoneDArray(){
    
    setTimeout(function(){
    let val = document.getElementById("size").value;

    if(val > 10){
      $("#maxSize").modal("show");
    }else if(val < 0){
      $("#negSize").modal("show");
    }else{
      let txt = "";
      let loc = 200; 
      for(let i=0;i<=val;i++){
          if(i == 0){
            txt+=`<div class="oneDArray-arraySubBox"  style=" border: none;
                font-size: 20px;
                line-height: 38px;" >
                Memory Location
              </div>`;
          }else{
            loc = loc+2;
            txt+=`<div class="oneDArray-arraySubBox" style="border:none;">
                ${loc}
              </div>`;
          }
      }
      document.getElementById("memBox").innerHTML=txt;

      txt = "";

      for(let i=0;i<=val;i++){
          if(i == 0){
            txt+=`<div class="oneDArray-arraySubBox" style="border:none;">
          Values
        </div>`;
          }else{
            txt+=`<div class="oneDArray-arraySubBox">
          ${i+1}
        </div>`;
          }
      }
      document.getElementById("valueBox").innerHTML=txt;

      txt = "";

      for(let i=0;i<=val;i++){
          if(i == 0){
            txt+=`<div class="oneDArray-arraySubBox" style="border:none;">
        Index
      </div>`;
          }else{
            txt+=`<div class="oneDArray-arraySubBox">
        ${i-1}
      </div>`;
          }
      }
      document.getElementById("indexBox").innerHTML=txt;
    }

    },500);
}

//for displaying 1-d array
function gettwoDArray(){
    
    setTimeout(function(){
    let row = document.getElementById("rowSize").value;
    let col = document.getElementById("colSize").value;

    if(row > 10 || col > 10){
      $("#maxSize").modal("show");
    }else if(row < 0 || col < 0){
      $("#negSize").modal("show");
    }else{
      let txt = "";
      
      //adding columns
      for(let i=0;i<=col;i++){
          if(i == 0){
            txt+=`<div class="twoDArray-arraySubBox" style="border:none;visibility: hidden;">
            Col 0
        </div>`;
          }else{
            txt+=`<div class="twoDArray-arraySubBox" style="border:none;">
                Col ${i-1}
            </div>`;
          }
      }
      document.getElementById("colBox").innerHTML=txt;

      txt = "";
      let val = 10;
      //now adding rows
      for(let i=0;i<row;i++){
          txt = `<div class="twoDArray-arraySubBox" style="border:none;">
          Row ${i} 
       </div>`;
            for(let j=0;j<col;j++){
                txt += `<div class="twoDArray-arraySubBox">
                ${val}<br><span style="font-size: 15px;">Arr[${i}][${j}]</span>
            </div>`;
                val = val+10;
            }
            document.getElementById("rowBox"+i).innerHTML = txt;
      }
    }

    },500);
}

var sLHead = null;
var sLaddr = null;
var sLNodesCount = 0;
//reset the singly linked list head to null
function resetList(){
  sLHead = null;
  sLaddr = 0;
  sLNodesCount = 0;
}

//insert at front of singly linked list
function sLInsertAtFront(sLVal){
  let ele = "";
  let html = "";
  sLNodesCount++;  

    if(sLHead == null){
      sLaddr = 1000;
        ele = `<div class="singleLinkedList-listSubBox" style="border:none;font-size:22px;">
                ${sLaddr}  
                </div>`;
        html = document.getElementById("memBox").innerHTML;

        html = ele + html;
        document.getElementById("memBox").innerHTML = html;

        ele = `<div class="singleLinkedList-listSubBox" style="width:60px">${sLVal}</div>

          <div class="singleLinkedList-listSubBox next" style="width:40px;font-size:17px">
            NULL
          </div>`;
        html = document.getElementById("valueBox").innerHTML;
        html = ele+html;
        document.getElementById("valueBox").innerHTML = html;
        

    }else{
      
      ele = `<div class="singleLinkedList-listSubBox" style="width:60px" >
         ${sLVal}
      </div>

          <div class="singleLinkedList-listSubBox next" style="width:40px;font-size:17px">${sLHead}</div>
        
        <div class="rectangle"></div>
        <div class="triangle-right"></div>`;
      
       sLaddr =  Math.ceil(Math.random() * (10000 - 1000) + 1000);
      // if(sLaddr %2 == 0)
      //   sLaddr = (sLaddr*2)-700;

      html = document.getElementById("valueBox").innerHTML;
      html = ele+html;
      document.getElementById("valueBox").innerHTML = html;

      ele = `<div class="singleLinkedList-listSubBox" style="border:none;font-size:22px;margin-right:83px;">
      ${sLaddr}  
      </div>`;
      html = document.getElementById("memBox").innerHTML;

      html = ele + html;
      document.getElementById("memBox").innerHTML = html;

    }
    sLHead = sLaddr;
    document.getElementById("head").innerHTML = "HEAD : "+sLHead;
    
}

//insert at end of singly linked list
function sLInsertAtEnd(sLVal){
  let ele = "";
  let html = "";

  sLNodesCount++;
    if(sLHead == null){
      sLaddr = 1000;
        ele = `<div class="singleLinkedList-listSubBox" style="border:none;font-size:22px;">
                ${sLaddr}  
                </div>`;
        html = document.getElementById("memBox").innerHTML;

        html = ele + html;
        document.getElementById("memBox").innerHTML = html;

        ele = `<div class="singleLinkedList-listSubBox" style="width:60px">${sLVal}</div>

          <div class="singleLinkedList-listSubBox next" style="width:40px;font-size:17px">
            NULL
          </div>`;
        html = document.getElementById("valueBox").innerHTML;
        html = ele+html;
        document.getElementById("valueBox").innerHTML = html;
        sLHead = sLaddr;

    }else{
      
      sLaddr =  Math.ceil(Math.random() * (10000 - 1000) + 1000);
      //change the last node next address
      //for this traverse the list
      ele = document.getElementById("valueBox").getElementsByClassName("next");
      let lastAdd;
      for(let i=0;i<ele.length;i++){
        lastAdd = ele[i];
      }

      lastAdd.innerHTML = ""+sLaddr;

      ele = `
      <div class="rectangle"></div>
      <div class="triangle-right"></div>

      <div class="singleLinkedList-listSubBox" style="width:60px" >
         ${sLVal}
      </div>
          <div class="singleLinkedList-listSubBox next" style="width:40px;font-size:17px">NULL</div>        
        `;
      
      
      // if(sLaddr %2 == 0)
      //   sLaddr = (sLaddr*2)-700;

      html = document.getElementById("valueBox").innerHTML;
      html = html+ele;
      document.getElementById("valueBox").innerHTML = html;

      ele = `<div class="singleLinkedList-listSubBox" style="border:none;font-size:22px;margin-left:83px;">
      ${sLaddr}  
      </div>`;
      html = document.getElementById("memBox").innerHTML;

      html = html+ele;
      document.getElementById("memBox").innerHTML = html;

    }
    document.getElementById("head").innerHTML = "HEAD : "+sLHead;
    
}

//delete node from last of singly linked list
function sLDeleteFromEnd(){
    let ele = "";

    if(sLNodesCount == 1){
      document.getElementById("memBox").innerHTML = "";
      document.getElementById("valueBox").innerHTML = "";
      document.getElementById("head").innerHTML = "HEAD : NULL";
    }else{
      ele = document.getElementById("valueBox").getElementsByTagName("div");
      let lgt = ele.length;

      for(let i=ele.length-1;i>lgt-1-4;i--)
      {
        //console.log(ele[i]);
        document.getElementById("valueBox").removeChild(ele[i]);
      }
      ele = document.getElementById("memBox").getElementsByTagName("div");
      document.getElementById("memBox").removeChild(ele[ele.length-1]);

      //now setting the last node next to null
      ele = document.getElementById("valueBox").getElementsByClassName("next");
      ele[ele.length-1].innerHTML = "NULL";
    }

    sLNodesCount--;
    if(sLNodesCount == 0)
      sLHead = null;
}

var stackTop = -1;

function resetStack(){
  stackTop = -1;
}

//push an element to stack
function push(val){
  console.log(top);
  let html = "";
  if(stackTop == -1){
    ++stackTop;
    document.getElementById("indexBoxStack").style.display = "";

    html = document.getElementById("idxBox").innerHTML;
    html = `<div class="stackSubBox" id="idx${stackTop}" style="border: none;">
              ${stackTop} 
            </div>`+html;

    document.getElementById("idxBox").innerHTML = html;

    html = document.getElementById("valueBox").innerHTML;

    html = `<div class="stackSubBox" id="val${stackTop}">
              ${val} 
            </div>`+html;
    document.getElementById("valueBox").innerHTML = html;

    html = document.getElementById("topBox").innerHTML;
    html = `<div class="stackSubBox" style="font-size: 27px;border:none;" id="top${stackTop}">
    <span>&#8592;</span>TOP
</div> `+html;
    document.getElementById("topBox").innerHTML = html;

  }else{
    //first update the previous top visibility to hidden
    document.getElementById("top"+stackTop).style.visibility = "hidden";
    ++stackTop;
    //now add the element

    html = document.getElementById("idxBox").innerHTML;
    html = `<div class="stackSubBox" style="border: none;" id="idx${stackTop}">
              ${stackTop} 
            </div>`+html;
    document.getElementById("idxBox").innerHTML = html;

    html = document.getElementById("valueBox").innerHTML;
    html = `<div class="stackSubBox" id="val${stackTop}">
              ${val} 
            </div>`+html;
    document.getElementById("valueBox").innerHTML = html;

    html = document.getElementById("topBox").innerHTML;
    html = `<div class="stackSubBox" style="font-size: 27px;border:none;" id="top${stackTop}">
    <span>&#8592;</span>TOP
</div> `+html;
    document.getElementById("topBox").innerHTML = html;

  }

  //finally update the top
  document.getElementById("displayTop").innerHTML = "TOP : "+stackTop;
}

//pop element from stack
function pop(){
  let ele = document.getElementById("idxBox");
  ele.removeChild(document.getElementById("idx"+stackTop));
  ele = document.getElementById("topBox");
  ele.removeChild(document.getElementById("top"+stackTop));

  ele = document.getElementById("valueBox");
  ele.removeChild(document.getElementById("val"+stackTop));

  stackTop--;
  if(stackTop == -1){
    document.getElementById("indexBoxStack").style.display = "none";
  }else{
    //display the current top
    document.getElementById("top"+stackTop).style.visibility = "visible";
  }
  //finally update the top
  document.getElementById("displayTop").innerHTML = "TOP : "+stackTop;

}

var QFront = 0;
var QRear = 0;

//reset the queue
function resetQueue(){
    QFront = QRear = 1;
}

//enqueue an element to queue
function enqueue(val){
  document.getElementById("val"+QRear).innerHTML = ""+val;
  document.getElementById("Up"+QRear).style.visibility = "hidden";
  document.getElementById("r"+QRear).style.visibility = "hidden";

  QRear++;
  document.getElementById("Up"+QRear).style.visibility = "visible";
  document.getElementById("r"+QRear).style.visibility = "visible";
}

function dequeue(){
  document.getElementById("displayDeq").innerHTML = "Last Dequeued Element : "+document.getElementById("val"+QFront).innerHTML;
  // document.getElementById("val"+QFront).innerHTML = "NULL";
  document.getElementById("Down"+QFront).style.visibility = "hidden";
  document.getElementById("f"+QFront).style.visibility = "hidden";

  QFront++;
  
  document.getElementById("Down"+QFront).style.visibility = "visible";
  document.getElementById("f"+QFront).style.visibility = "visible";
}

var CQRear = 0;
var CQFront = 0;
var CQMaxSize = 0;

//reset the circule queue
function resetCirQueue(){
  CQFront = CQRear = 0;
  CQMaxSize = 0;
}

//enqueue an element to queue
function cir_enqueue(val){
document.getElementById("val"+CQRear).innerHTML = ""+val;
document.getElementById("Up"+CQRear).style.visibility = "hidden";
document.getElementById("r"+CQRear).style.visibility = "hidden";

CQRear = (++CQRear)%10;
document.getElementById("Up"+CQRear).style.visibility = "visible";
document.getElementById("r"+CQRear).style.visibility = "visible";
CQMaxSize++;

}

//dequeue for circular queue
function cir_dequeue(){
document.getElementById("displayDeq").innerHTML = "Last Dequeued Element : "+document.getElementById("val"+CQFront).innerHTML;
document.getElementById("val"+CQFront).innerHTML = "NULL";
// document.getElementById("val"+QFront).innerHTML = "NULL";
document.getElementById("Down"+CQFront).style.visibility = "hidden";
document.getElementById("f"+CQFront).style.visibility = "hidden";

CQFront = (++CQFront)%10;

document.getElementById("Down"+CQFront).style.visibility = "visible";
document.getElementById("f"+CQFront).style.visibility = "visible";
CQMaxSize--;
}

function resetArraySearch(){
  for(let i=0;i<10;i++){
    document.getElementById(""+i).style.backgroundColor = "";
  }
  document.getElementById("displayIndex").innerHTML = "Value Found At Index : NA ";
}

//linear search function
function linearSearch(val,delay){
  let startIdx = 0;
  let endIdx = 10;

  let x = setInterval(function(){
    //console.log("hello");
    if(startIdx != 0){
      document.getElementById(""+(startIdx-1)).style.backgroundColor = "";
    }
    
      if(startIdx == endIdx){
        document.getElementById("displayIndex").innerHTML = "Value Found At Index : Value Not Found !!";
        clearInterval(x);
        return;  
      }
      document.getElementById(""+startIdx).style.backgroundColor = "#2ce8e852";
      
      if(document.getElementById(""+startIdx).innerText == val){
        document.getElementById("displayIndex").innerHTML = "Value Found At Index : "+startIdx;
        flag = true;
        clearInterval(x);
        return;
      }
      startIdx++;
  },delay);
  
}

//binary search function
function binarySearch(val,delay){
  let startIdx = 0;
  let endIdx = 9;
  let mid = 0;

  let x = setInterval(function(){
      document.getElementById(""+mid).style.backgroundColor = "";

    mid = Math.floor((startIdx+endIdx)/2);
    //console.log("hello");
    
    
      if(startIdx > endIdx){
        document.getElementById("displayIndex").innerHTML = "Value Found At Index : Value Not Found !!";
        clearInterval(x);
        return;  
      }

      document.getElementById(""+mid).style.backgroundColor = "#2ce8e852";
      
      if(document.getElementById(""+mid).innerText == val){
        document.getElementById("displayIndex").innerHTML = "Value Found At Index : "+startIdx;
        clearInterval(x);
        return;
      }
      console.log(Number(document.getElementById(""+mid).innerHTML));

      if(Number(document.getElementById(""+mid).innerHTML) < Number(val))
        startIdx = mid+1;
      else
          endIdx = mid-1;    

  },delay);
  
}

function resetLcs(str1,str2,delay){
  document.body.innerHTML = `<br>
  <a href="index.html" style="margin-left: 4%;"> <-  Go Back</a>
<br>
  <h3 align="center" style="color:green;"> Welcome To Longest Common SubSequence Length Visualizer</h3>
    <div style="margin:3%;" class="text-center">
        <div class="row">
          <div class="col">
            <input type="text" id="l1" class="form-control" value="${str1}">
          </div>

          <div class="col">
            <input type="text" id="l2" class="form-control" value="${str2}">
          </div>

          <div class="col">
            <input type="number" id="delay" class="form-control" value="${delay}">
          </div>

          <div class="col">
            <button type="submit" class="btn btn-primary" onclick="getLcs();">Start</button>
          </div>

        </div>
    </div>

<!-- Modal for empty string-->
<div class="modal fade" id="empField" tabindex="-1" 
role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Please Provide The String
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<h5 align="center" style="color: green;" id="length">Length Of LCS : NA</h5>
<h5 align="center" style="color: green;" id="displayLcs">LCS IS : NA</h5>
    <div class="twoDArray-arrayBox" id="colBox" style="margin-top:1%;">
    </div>`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//find the length of LCS
async function LCS(str1,str2,delay){
  let n = str1.length;
  let m = str2.length;
  //first draw the matrix for this
  let txt = "";
  resetLcs(str1,str2,delay);

  for(let i=0;i<=m+1;i++){
    if(i == 0){
      txt+=`<div class="twoDArray-arraySubBox" style="border:none;visibility: hidden;">
      Col 0
  </div>`;
    }else if(i==1){
      txt+=`<div class="twoDArray-arraySubBox" style="border:none;">
        NULL
      </div>`;
    }else{
      txt+=`<div class="twoDArray-arraySubBox" style="border:none;">
          ${str2[i-2]}
      </div>`;
    }
  }
  document.getElementById("colBox").innerHTML = txt;
  txt = "";

  //first add the row boxes
  for(let j=0;j<=n;j++){
    if(j == n){
      txt += `<div class="twoDArray-arrayBox" style="margin-top: 0%;margin-bottom:3%;" id="rowBox${j}">
      </div>`;  
    }else{
      txt += `<div class="twoDArray-arrayBox" style="margin-top: 0%;" id="rowBox${j}">
    </div>`;

    }
}

  document.body.innerHTML = document.body.innerHTML+txt;

  for(let i=0;i<=n;i++){
    if(i == 0){
      txt = `<div class="twoDArray-arraySubBox" style="border:none;">
        NULL 
      </div>`;
    }else{
      txt = `<div class="twoDArray-arraySubBox" style="border:none;">
        ${str1[i-1]} 
      </div>`;
    }
      for(let j=0;j<=m;j++){
          txt += `<div class="twoDArray-arraySubBox" id="${i}${j}">0</div>`;
      }
      document.getElementById("rowBox"+i).innerHTML = txt;
  }

  //now fill the table using bottom up approach
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      
      if(str1[i-1] == str2[j-1]){
        document.getElementById(""+(i-1)+(j-1)).style.backgroundColor = "#2ce8e852";
        document.getElementById(""+i+j).style.backgroundColor = "#ff000045";
        await sleep(delay);
        document.getElementById(""+(i-1)+(j-1)).style.backgroundColor = "";
        document.getElementById(""+i+j).innerHTML = 1+Number(document.getElementById(""+(i-1)+(j-1)).innerHTML);
        document.getElementById(""+i+j).style.backgroundColor = "";
      }else{
        document.getElementById(""+(i)+(j-1)).style.backgroundColor = "#2ce8e852";
        document.getElementById(""+(i-1)+(j)).style.backgroundColor = "#2ce8e852";
        document.getElementById(""+i+j).style.backgroundColor = "#ff000045";
        await sleep(delay);
        document.getElementById(""+i+j).innerHTML = Math.max(Number(document.getElementById(""+(i)+(j-1)).innerHTML),
        Number(document.getElementById(""+(i-1)+(j)).innerHTML));
        document.getElementById(""+(i)+(j-1)).style.backgroundColor = "";
        document.getElementById(""+(i-1)+(j)).style.backgroundColor = "";
        document.getElementById(""+i+j).style.backgroundColor = "";
      }
    }
  }

  document.getElementById(""+n+m).style.backgroundColor = "#ff000045";
  document.getElementById("length").innerHTML = "Length Of LCS : "+document.getElementById(""+n+m).innerHTML;

  let ans = "";

  for(let i=n;i>0;){
    for(let j=m;j>0;){
      if(str1[i-1] == str2[j-1]){
         ans = str1[i-1]+ans;
         i = i-1;
         j = j-1;
      }else{
        if(Number(document.getElementById(""+(i-1)+j).innerHTML) > Number(Number(document.getElementById(""+i+(j-1)).innerHTML))){
          i = i-1;
        }else{
          j = j-1;
        }
      }
    }
  }
  document.getElementById("displayLcs").innerHTML = "LCS IS : "+ans;
}

//reset bubble sort
function resetBubbleSort(delay){
  document.body.innerHTML = `<br>
  <a href="index.html" style="margin-left: 4%;"> <-  Go Back</a>
<br>
  <h3 align="center" style="color:green;"> Welcome To Bubble Sort Visualizer</h3>
    <div style="margin:3%;" class="text-center">
        <div class="row">
            <div class="col">
                <input type="number" id="delay" class="form-control" value="${delay}">
            </div>

          <div class="col">
            <button type="submit" class="btn btn-primary" onclick="getbubbleSort();">Start Sorting</button>
          </div>

        </div>
    </div>
<!-- Modal for empty delay-->
<div class="modal fade" id="empField" tabindex="-1" 
role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Please Provide The Delay Time
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<br><br>
    <div class="sortBox" style="margin-top: 1%;" id="valueBox">
        <div class="sortSubBox" style="border:none;">
            Values
        </div>

        <div class="sortSubBox" id="0">
            60
        </div>

        <div class="sortSubBox" id="1">
            50
        </div>

        <div class="sortSubBox" id="2">
            30
        </div>

        <div class="sortSubBox" id="3">
            25
        </div>

        <div class="sortSubBox" id="4">
            20
        </div>

        <div class="sortSubBox" id="5">
            15
        </div>

        <div class="sortSubBox" id="6">
            24
        </div>

        <div class="sortSubBox" id="7">
            36
        </div>

        <div class="sortSubBox" id="8">
            40
        </div>
    </div>

    <div class="sortBox" style="margin-top: 1%;">
        <div class="sortSubBox" style="border:none;">
            Index
        </div>

        <div class="sortSubBox" style="border:none;">
            0
        </div>

        <div class="sortSubBox" style="border:none;">
            1
        </div>

        <div class="sortSubBox" style="border:none;">
            2
        </div>

        <div class="sortSubBox" style="border:none;">
            3
        </div>

        <div class="sortSubBox" style="border:none;">
            4
        </div>

        <div class="sortSubBox" style="border:none;">
            5
        </div>

        <div class="sortSubBox" style="border:none;">
            6
        </div>

        <div class="sortSubBox" style="border:none;">
            7
        </div>

        <div class="sortSubBox" style="border:none;">
            8
        </div>
  </div>`;
}

//reset insertion sort
function resetInsertionSort(delay){
  document.body.innerHTML = `<br>
  <a href="index.html" style="margin-left: 4%;"> <-  Go Back</a>
<br>
  <h3 align="center" style="color:green;"> Welcome To Insertion Sort Visualizer</h3>
    <div style="margin:3%;" class="text-center">
        <div class="row">
            <div class="col">
                <input type="number" id="delay" class="form-control" value="${delay}">
            </div>

          <div class="col">
            <button type="submit" class="btn btn-primary" onclick="getInsertionSort();">Start Sorting</button>
          </div>

        </div>
    </div>
<!-- Modal for empty delay-->
<div class="modal fade" id="empField" tabindex="-1" 
role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Please Provide The Delay Time
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<h4 style="color:green;" id="key" align="center">Current Key : NA</h4>

<br><br>
<div class="sortBox" style="margin-top: 1%;" id="valueBox">
    <div class="sortSubBox" style="border:none;visibility: hidden;">
        Compare
    </div>

    <div class="sortSubBox" id="k0" style="border:none;visibility: hidden;">
        60 < 50
    </div>

    <div class="sortSubBox" id="k1" style="border:none;visibility: hidden;">
        50
    </div>

    <div class="sortSubBox" id="k2" style="border:none;visibility: hidden;">
        30
    </div>

    <div class="sortSubBox" id="k3" style="border:none;visibility: hidden;">
        25
    </div>

    <div class="sortSubBox" id="k4" style="border:none;visibility: hidden;">
        20
    </div>

    <div class="sortSubBox" id="k5" style="border:none;visibility: hidden;">
        15
    </div>

    <div class="sortSubBox" id="k6" style="border:none;visibility: hidden;">
        24
    </div>

    <div class="sortSubBox" id="k7" style="border:none;visibility: hidden;">
        36
    </div>

    <div class="sortSubBox" id="k8" style="border:none;visibility: hidden;">
        40
    </div>
</div>

    <div class="sortBox" style="margin-top: 1%;" id="valueBox">
        <div class="sortSubBox" style="border:none;">
            Values
        </div>

        <div class="sortSubBox" id="0">
            60
        </div>

        <div class="sortSubBox" id="1">
            50
        </div>

        <div class="sortSubBox" id="2">
            30
        </div>

        <div class="sortSubBox" id="3">
            25
        </div>

        <div class="sortSubBox" id="4">
            20
        </div>

        <div class="sortSubBox" id="5">
            15
        </div>

        <div class="sortSubBox" id="6">
            24
        </div>

        <div class="sortSubBox" id="7">
            36
        </div>

        <div class="sortSubBox" id="8">
            40
        </div>
    </div>

    <div class="sortBox" style="margin-top: 1%;">
        <div class="sortSubBox" style="border:none;">
            Index
        </div>

        <div class="sortSubBox" style="border:none;">
            0
        </div>

        <div class="sortSubBox" style="border:none;">
            1
        </div>

        <div class="sortSubBox" style="border:none;">
            2
        </div>

        <div class="sortSubBox" style="border:none;">
            3
        </div>

        <div class="sortSubBox" style="border:none;">
            4
        </div>

        <div class="sortSubBox" style="border:none;">
            5
        </div>

        <div class="sortSubBox" style="border:none;">
            6
        </div>

        <div class="sortSubBox" style="border:none;">
            7
        </div>

        <div class="sortSubBox" style="border:none;">
            8
        </div>
  </div>
`;
}
//function for insertion sort
async function insertionSort(delay){
  resetInsertionSort(delay);

    let i, key, j;  
    for (i = 1; i < 9; i++) 
    {  
        key = Number(document.getElementById(""+i).innerHTML);
        document.getElementById("key").innerHTML = "Current Key : "+key;  
        document.getElementById(""+i).style.backgroundColor = "#ff000045";
        document.getElementById("k"+i).innerHTML = "CK";
        document.getElementById("k"+i).style.visibility= "visible";
        j = i - 1;  
      await sleep(delay);
      document.getElementById(""+i).style.backgroundColor = "";
        document.getElementById("k"+i).style.visibility= "hidden";

        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && Number(document.getElementById(""+j).innerHTML) > key) 
        {  
          document.getElementById(""+j).style.backgroundColor ="#2ce8e852";
          document.getElementById("k"+j).innerHTML = document.getElementById(""+j).innerHTML+" > "+key;
          document.getElementById("k"+j).style.visibility = "visible";
          await sleep(delay);
            document.getElementById(""+(j+1)).innerHTML = document.getElementById(""+j).innerHTML;
            //arr[j + 1] = arr[j];  
            
           await sleep(delay);
           document.getElementById(""+j).style.backgroundColor ="";
          document.getElementById("k"+j).style.visibility = "hidden";  
          j = j - 1; 
        }
        document.getElementById(""+(j+1)).style.backgroundColor = "#ff000045";  
        document.getElementById(""+(j+1)).innerHTML = key;
        await sleep(delay);
        document.getElementById(""+(j+1)).style.backgroundColor = "";
        //arr[j + 1] = key;  
    }
    document.getElementById("key").innerHTML = "Current Key : NA";
}

//function for bubble sort
async function bubbleSort(delay){
  let v1;
  let v2;
  
  
  for(let i=0;i<8;i++){
    for(let j = 0;j<9-i-1;j++){
        v1 = Number(document.getElementById(""+(j+1)).innerHTML);
        v2 = Number(document.getElementById(""+j).innerHTML);
        document.getElementById(""+(j+1)).style.backgroundColor = "#2ce8e852";
        document.getElementById(""+j).style.backgroundColor = "#2ce8e852";

      await sleep(delay/2);
        if(v1 < v2){
          document.getElementById(""+(j+1)).innerHTML = v2;
          document.getElementById(""+j).innerHTML = v1;
        }
        await sleep(delay);

        document.getElementById(""+(j+1)).style.backgroundColor = "";
        document.getElementById(""+j).style.backgroundColor = "";
    }
  }
}

//reset selection sort
function resetSelectionSort(delay){
  document.body.innerHTML = `<br>
  <a href="index.html" style="margin-left: 4%;"> <-  Go Back</a>
<br>
  <h3 align="center" style="color:green;"> Welcome To Selection Sort Visualizer</h3>
    <div style="margin:3%;" class="text-center">
        <div class="row">
            <div class="col">
                <input type="number" id="delay" class="form-control" value="${delay}">
            </div>

          <div class="col">
            <button type="submit" class="btn btn-primary" onclick="getSelectionSort();">Start Sorting</button>
          </div>

        </div>
    </div>
<!-- Modal for empty delay-->
<div class="modal fade" id="empField" tabindex="-1" 
role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Please Provide The Delay Time
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<h4 style="color:green;" id="key" align="center">Current Minimum Element : NA</h4>

<br><br>
<div class="sortBox" style="margin-top: 1%;" id="valueBox">
    <div class="sortSubBox" style="border:none;visibility: hidden;">
        Compare
    </div>

    <div class="sortSubBox" id="k0" style="border:none;visibility: hidden;">
        60 < 50
    </div>

    <div class="sortSubBox" id="k1" style="border:none;visibility: hidden;">
        50
    </div>

    <div class="sortSubBox" id="k2" style="border:none;visibility: hidden;">
        30
    </div>

    <div class="sortSubBox" id="k3" style="border:none;visibility: hidden;">
        25
    </div>

    <div class="sortSubBox" id="k4" style="border:none;visibility: hidden;">
        20
    </div>

    <div class="sortSubBox" id="k5" style="border:none;visibility: hidden;">
        15
    </div>

    <div class="sortSubBox" id="k6" style="border:none;visibility: hidden;">
        24
    </div>

    <div class="sortSubBox" id="k7" style="border:none;visibility: hidden;">
        36
    </div>

    <div class="sortSubBox" id="k8" style="border:none;visibility: hidden;">
        40
    </div>
</div>

    <div class="sortBox" style="margin-top: 1%;" id="valueBox">
        <div class="sortSubBox" style="border:none;">
            Values
        </div>

        <div class="sortSubBox" id="0">
            60
        </div>

        <div class="sortSubBox" id="1">
            50
        </div>

        <div class="sortSubBox" id="2">
            30
        </div>

        <div class="sortSubBox" id="3">
            25
        </div>

        <div class="sortSubBox" id="4">
            20
        </div>

        <div class="sortSubBox" id="5">
            15
        </div>

        <div class="sortSubBox" id="6">
            24
        </div>

        <div class="sortSubBox" id="7">
            36
        </div>

        <div class="sortSubBox" id="8">
            40
        </div>
    </div>

    <div class="sortBox" style="margin-top: 1%;">
        <div class="sortSubBox" style="border:none;">
            Index
        </div>

        <div class="sortSubBox" style="border:none;">
            0
        </div>

        <div class="sortSubBox" style="border:none;">
            1
        </div>

        <div class="sortSubBox" style="border:none;">
            2
        </div>

        <div class="sortSubBox" style="border:none;">
            3
        </div>

        <div class="sortSubBox" style="border:none;">
            4
        </div>

        <div class="sortSubBox" style="border:none;">
            5
        </div>

        <div class="sortSubBox" style="border:none;">
            6
        </div>

        <div class="sortSubBox" style="border:none;">
            7
        </div>

        <div class="sortSubBox" style="border:none;">
            8
        </div>
  </div>`;
}

//function for selection sort
async function selectionSort(delay){
  resetSelectionSort(delay);

  let i, j, min_ele,curr; 
  let min_idx; 
  
    // One by one move boundary of unsorted subarray  
    for (i = 0; i < 8; i++)  
    {  
        // Find the minimum element in unsorted array  
        min_ele = Number(document.getElementById(""+i).innerHTML);
        min_idx = i;
        document.getElementById("key").innerHTML = "Current Minimum Element : "+min_ele;
        document.getElementById(""+i).style.backgroundColor = "#ff000045";
        document.getElementById("k"+i).innerHTML = "CurrMin";
        document.getElementById("k"+i).style.visibility = "visible";
        await sleep(delay);
        document.getElementById(""+i).style.backgroundColor = "";
        document.getElementById("k"+i).style.visibility = "hidden";

        for (j = i+1; j < 9; j++){
          curr = Number(document.getElementById(""+j).innerHTML);
          document.getElementById(""+j).style.backgroundColor = "#2ce8e852";
          document.getElementById("k"+j).innerHTML = curr+" < "+min_ele;
          document.getElementById("k"+j).style.visibility = "visible";
          await sleep(delay);
          // document.getElementById("k"+j).style.innerHTML = ""+curr + " < "+min_ele;
          document.getElementById("k"+j).style.visibility = "hidden";
          document.getElementById(""+j).style.backgroundColor = "";

          if (curr < min_ele){  
            min_ele = curr;
            document.getElementById("key").innerHTML = "Current Minimum Element : "+min_ele;
            min_idx = j;
          }

        }

        // Swap the found minimum element with the first element 
        document.getElementById(""+i).style.backgroundColor = "#ff000045";
        document.getElementById(""+min_idx).style.backgroundColor = "#ff000045";
        await sleep(delay);
        curr = Number(document.getElementById(""+i).innerHTML);
        document.getElementById(""+i).innerHTML = min_ele;
        document.getElementById(""+min_idx).innerHTML = curr;
        await sleep(delay);
        document.getElementById(""+i).style.backgroundColor = "";
        document.getElementById(""+min_idx).style.backgroundColor = "";
        await sleep(delay);
        // console.log(min_ele);
        //swap(&arr[min_idx], &arr[i]);  
    } 
    document.getElementById("key").innerHTML = "Current Minimum Element : NA";

}

