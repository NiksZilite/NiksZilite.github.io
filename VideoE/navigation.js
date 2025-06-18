const audio_button = document.getElementById('audio_button');
const anotacija = document.getElementById('anotacija');
let x = 0;
const navigation_button = document.querySelectorAll('.navigation_button');
const END = document.getElementById('END');
  const END_N1 = document.getElementById('END_N1');
  const END_N2 = document.getElementById('END_N2');
  const END_N3 = document.getElementById('END_N3'); 
  const END_N4 = document.getElementById('END_N4');
  const END_N5 = document.getElementById('END_N5');
  const END_N6 = document.getElementById('END_N6'); 
  const END_N7 = document.getElementById('END_N7');

  const END_N8 = document.getElementById('END_N8');
  const END_N9 = document.getElementById('END_N9');
  const END_N10 = document.getElementById('END_N10'); 
  const END_N11 = document.getElementById('END_N11');


const A = document.getElementById('A');
    const A1S_N = document.getElementById('A1S_N'); const A1S = document.getElementById('A1S');
    const A2F_N = document.getElementById('A2F_N'); const A2F = document.getElementById('A2F');
    const A2B_N = document.getElementById('A2B_N'); const A2B = document.getElementById('A2B');

const B = document.getElementById('B');
    const B1S_N = document.getElementById('B1S_N'); const B1S = document.getElementById('B1S');
    const B2F_N = document.getElementById('B2F_N'); const B2F = document.getElementById('B2F');
    const B2B_N = document.getElementById('B2B_N'); const B2B = document.getElementById('B2B');
    const B3F_N = document.getElementById('B3F_N'); const B3F = document.getElementById('B3F');
    const B3B_N = document.getElementById('B3B_N'); const B3B = document.getElementById('B3B');

const C = document.getElementById('C');
    const C1S_N = document.getElementById('C1S_N'); const C1S_F = document.getElementById('C1S_F'); const C1S_B = document.getElementById('C1S_B');
    const C2F_N = document.getElementById('C2F_N'); const C2F = document.getElementById('C2F');
    const C2B_N = document.getElementById('C2B_N'); const C2B = document.getElementById('C2B');
    const C3F_N = document.getElementById('C3F_N'); const C3F = document.getElementById('C3F');
    const C3B_N = document.getElementById('C3B_N'); const C3B = document.getElementById('C3B'); 

const D = document.getElementById('D');

const E = document.getElementById('E');
    const E1F_N = document.getElementById('E1F_N'); const E1F = document.getElementById('E1F');
    const E1B_N = document.getElementById('E1B_N'); const E1B = document.getElementById('E1B');
  
const H = document.getElementById('H');
    const H1S_N = document.getElementById('H1S_N'); const H1S = document.getElementById('H1S');
    const H2F_N = document.getElementById('H2F_N'); const H2F = document.getElementById('H2F');
    const H2B_N = document.getElementById('H2B_N'); const H2B = document.getElementById('H2B');

const I = document.getElementById('I');
    const I1F_N = document.getElementById('I1F_N'); const I1F = document.getElementById('I1F');
    const I1B_N = document.getElementById('I1B_N'); const I1B = document.getElementById('I1B');

const M = document.getElementById('M');
    const M1F_N = document.getElementById('M1F_N'); const M1F = document.getElementById('M1F');
    const M1B_N = document.getElementById('M1B_N'); const M1B = document.getElementById('M1B');
    const M2F_N = document.getElementById('M2F_N');
    const M2B_N = document.getElementById('M2B_N');

const G = document.getElementById('G');
    const G1S_N = document.getElementById('G1S_N'); const G1S = document.getElementById('G1S');
  
const L = document.getElementById('L');
    const L1F_N = document.getElementById('L1F_N'); const L1F = document.getElementById('L1F');
    const L1B_N = document.getElementById('L1B_N'); const L1B = document.getElementById('L1B');

const N = document.getElementById('N');
    const N2F_N = document.getElementById('N2F_N');
    const N1F_N = document.getElementById('N1F_N'); const N1F = document.getElementById('N1F');
    const N1B_N = document.getElementById('N1B_N'); const N1B = document.getElementById('N1B');

const P = document.getElementById('P');
    const P1F_N = document.getElementById('P1F_N'); const P1F = document.getElementById('P1F');
    const P1B_N = document.getElementById('P1B_N'); const P1B = document.getElementById('P1B');

const fa = document.getElementById("fadeIN");
// 

A1S_N.addEventListener('click', AtoA1S);  A1S.addEventListener('click', A1StoA);

A2F_N.addEventListener('click', AtoB);  A2B_N.addEventListener('click', BtoA);


B1S_N.addEventListener('click', BtoB1S); B1S.addEventListener('click', B1StoB);
B2F_N.addEventListener('click', BtoC); B2B_N.addEventListener('click', CtoB);

B3F_N.addEventListener('click', BtoD);
B3B_N.addEventListener('click', DtoB);

C1S_N.addEventListener('click', CtoC1S);  C1S.addEventListener('click', C1StoC);
C2F_N.addEventListener('click', CtoE); C2B_N.addEventListener('click', EtoC);
C3F_N.addEventListener('click', CtoG); C3B_N.addEventListener('click', GtoC);

E1F_N.addEventListener('click', EtoH); E1B_N.addEventListener('click', HtoE);

H1S_N.addEventListener('click', HtoH1S);  H1S.addEventListener('click', H1StoH);
H2F_N.addEventListener('click', HtoI);  H2B_N.addEventListener('click', ItoH);

I1F_N.addEventListener('click', ItoM); I1B_N.addEventListener('click', MtoI);

M1F_N.addEventListener('click', MtoG); M1B_N.addEventListener('click', GtoM);
M2F_N.addEventListener('click', MtoL); M2B_N.addEventListener('click', LtoM);

G1S_N.addEventListener('click', GtoG1S);  G1S.addEventListener('click', G1StoG);

L1F_N.addEventListener('click', LtoN); L1B_N.addEventListener('click', NtoL);

N2F_N.addEventListener('click', NtoG);
N1F_N.addEventListener('click', NtoP); N1B_N.addEventListener('click', PtoN);

P1F_N.addEventListener('click', PtoD); P1B_N.addEventListener('click', DtoP);

function AtoA1S() {
    delay(450).then(() => {

    A.style.visibility = "hidden";
    A1S.style.visibility = "visible";
    A1S_N.style.visibility = "hidden";
    A2F_N.style.visibility = "hidden";

    });
}

function A1StoA() {
    delay(450).then(() => {

    A1S.style.visibility = "hidden";
    A.style.visibility = "visible";
    A1S_N.style.visibility = "visible";
    A2F_N.style.visibility = "visible";

    });
}

function AtoB() {

  A1S_N.style.visibility = "hidden";
  A2F_N.style.visibility = "hidden";

    delay(1500).then(() => {

    A.style.visibility = "hidden";

    A2F.style.visibility = "visible";
    A2F.currentTime = 0;
    A2F.play();

    delay(7500).then(() => {
      A2F.style.visibility = "hidden";   
      B.style.visibility = "visible";
      B1S_N.style.visibility = "visible";
      B2F_N.style.visibility = "visible";
      B3F_N.style.visibility = "visible";
      A2B_N.style.visibility = "visible";
    });
    });
}

function BtoA() {

    B1S_N.style.visibility = "hidden";
    B2F_N.style.visibility = "hidden";
    B3F_N.style.visibility = "hidden";
    A2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    B.style.visibility = "hidden";

    A2B.style.visibility = "visible";
    A2B.currentTime = 0;
    A2B.play();

    delay(7500).then(() => {
        //Apturēt video
      A2B.style.visibility = "hidden";   
        //Jaunā scēna
      A.style.visibility = "visible";
      //Pogas
      A1S_N.style.visibility = "visible";
      A2F_N.style.visibility = "visible";
    });
    });
}

function BtoC() {

    B1S_N.style.visibility = "hidden";
    B2F_N.style.visibility = "hidden";
    B3F_N.style.visibility = "hidden";
    A2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    B.style.visibility = "hidden";

    B2F.style.visibility = "visible";
    B2F.currentTime = 0;
    B2F.play();

    delay(7500).then(() => {
        //Apturēt video
      B2F.style.visibility = "hidden";   
        //Jaunā scēna
      C.style.visibility = "visible";
      //Pogas
      C1S_N.style.visibility = "visible";
      C2F_N.style.visibility = "visible";
      C3F_N.style.visibility = "visible";
      B2B_N.style.visibility = "visible";
    });
    });
}

function BtoD() {

    B1S_N.style.visibility = "hidden";
    B2F_N.style.visibility = "hidden";
    B3F_N.style.visibility = "hidden";
    A2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    B.style.visibility = "hidden";

    B3F.style.visibility = "visible";
    B3F.currentTime = 0;
    B3F.play();

    delay(7500).then(() => {
        //Apturēt video
      B3F.style.visibility = "hidden";   
        //Jaunā scēna
      D.style.visibility = "visible";
      //Pogas
      P1B_N.style.visibility = "visible";
      B3B_N.style.visibility = "visible";
    });
    });
}

function DtoB() {

      P1B_N.style.visibility = "hidden";
      B3B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    D.style.visibility = "hidden";

    B3B.style.visibility = "visible";
    B3B.currentTime = 0;
    B3B.play();

    delay(7500).then(() => {
        //Apturēt video
      B3B.style.visibility = "hidden";   
        //Jaunā scēna
      B.style.visibility = "visible";
      //Pogas

    B1S_N.style.visibility = "visible";
    B2F_N.style.visibility = "visible";
    B3F_N.style.visibility = "visible";
    A2B_N.style.visibility = "visible";

    });
    });
}

function BtoB1S() {
    delay(450).then(() => {

    B.style.visibility = "hidden";
    B1S_N.style.visibility = "hidden";
    B2F_N.style.visibility = "hidden";
    B3F_N.style.visibility = "hidden";
    A2B_N.style.visibility = "hidden";
    B1S.style.visibility = "visible";

    });
}

function B1StoB() {
    delay(450).then(() => {

    B.style.visibility = "visible";
    B1S_N.style.visibility = "visible";
    B2F_N.style.visibility = "visible";
    B3F_N.style.visibility = "visible";
    A2B_N.style.visibility = "visible";
    B1S.style.visibility = "hidden";

    });
}

function CtoB() {

    C1S_N.style.visibility = "hidden";
    C2F_N.style.visibility = "hidden";
    C3F_N.style.visibility = "hidden";
    B2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    C.style.visibility = "hidden";

    B2B.style.visibility = "visible";
    B2B.currentTime = 0;
    B2B.play();

    delay(7500).then(() => {
        //Apturēt video
      B2B.style.visibility = "hidden";   
        //Jaunā scēna
      B.style.visibility = "visible";
      //Pogas
      B1S_N.style.visibility = "visible";
      B2F_N.style.visibility = "visible";
      B3F_N.style.visibility = "visible";
      A2B_N.style.visibility = "visible";
    });
    });
}

function CtoC1S() {

    C1S_N.style.visibility = "hidden";
    C2F_N.style.visibility = "hidden";
    C3F_N.style.visibility = "hidden";
    B2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    C.style.visibility = "hidden";

    C1S_F.style.visibility = "visible";
    C1S_F.currentTime = 0;
    C1S_F.play();

    delay(7500).then(() => {
        //Apturēt video
      C1S_F.style.visibility = "hidden";   
        //Jaunā scēna
      C1S.style.visibility = "visible";
    });
    });
}

function C1StoC() {

    delay(1500).then(() => {

    C1S.style.visibility = "hidden";

    C1S_B.style.visibility = "visible";
    C1S_B.currentTime = 0;
    C1S_B.play();

    delay(7500).then(() => {
        //Apturēt video
      C1S_B.style.visibility = "hidden";
        //Jaunā scēna
      C.style.visibility = "visible";
      //Pogas
      C1S_N.style.visibility = "visible";
      C2F_N.style.visibility = "visible";
      C3F_N.style.visibility = "visible";
      B2B_N.style.visibility = "visible";
    });
    });
}

function CtoE() {

    C1S_N.style.visibility = "hidden";
    C2F_N.style.visibility = "hidden";
    C3F_N.style.visibility = "hidden";
    B2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    C.style.visibility = "hidden";

    C2F.style.visibility = "visible";
    C2F.currentTime = 0;
    C2F.play();

    delay(7500).then(() => {
        //Apturēt video
      C2F.style.visibility = "hidden";   
        //Jaunā scēna
      E.style.visibility = "visible";
      //Pogas
      C2B_N.style.visibility = "visible";
      E1F_N.style.visibility = "visible";
    });
    });
}

function EtoC() {
    E1F_N.style.visibility = "hidden";
    C2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    E.style.visibility = "hidden";

    C2B.style.visibility = "visible";
    C2B.currentTime = 0;
    C2B.play();

    delay(7500).then(() => {
        //Apturēt video
      C2B.style.visibility = "hidden";
        //Jaunā scēna
      C.style.visibility = "visible";
      //Pogas
      C1S_N.style.visibility = "visible";
      C2F_N.style.visibility = "visible";
      C3F_N.style.visibility = "visible";
      B2B_N.style.visibility = "visible";
    });
    });
}

function CtoG() {

    C1S_N.style.visibility = "hidden";
    C2F_N.style.visibility = "hidden";
    C3F_N.style.visibility = "hidden";
    B2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    C.style.visibility = "hidden";

    C3F.style.visibility = "visible";
    C3F.currentTime = 0;
    C3F.play();

    delay(7500).then(() => {
        //Apturēt video
      C3F.style.visibility = "hidden";   
        //Jaunā scēna
      G.style.visibility = "visible";
      //Pogas
    C3B_N.style.visibility = "visible";
    M1B_N.style.visibility = "visible";
    G1S_N.style.visibility = "visible";
    });
    });
}

function GtoC() {
    M1B_N.style.visibility = "hidden";
    C3B_N.style.visibility = "hidden";
    G1S_N.style.visibility = "hidden";

    delay(1500).then(() => {

    G.style.visibility = "hidden";

    C3B.style.visibility = "visible";
    C3B.currentTime = 0;
    C3B.play();

    delay(7500).then(() => {
        //Apturēt video
      C3B.style.visibility = "hidden";
        //Jaunā scēna
      C.style.visibility = "visible";
      //Pogas
      C1S_N.style.visibility = "visible";
      C2F_N.style.visibility = "visible";
      C3F_N.style.visibility = "visible";
      B2B_N.style.visibility = "visible";
    });
    });
}

function EtoH() {
    E1F_N.style.visibility = "hidden";
    C2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    E.style.visibility = "hidden";

    E1F.style.visibility = "visible";
    E1F.currentTime = 0;
    E1F.play();

    delay(7500).then(() => {
        //Apturēt video
      E1F.style.visibility = "hidden";
        //Jaunā scēna
      H.style.visibility = "visible";
      //Pogas
      E1B_N.style.visibility = "visible";
      H1S_N.style.visibility = "visible";
      H2F_N.style.visibility = "visible";
    });
    });
}

function HtoE() {

    E1B_N.style.visibility = "hidden";
    H1S_N.style.visibility = "hidden";
    H2F_N.style.visibility = "hidden";

    delay(1500).then(() => {

    H.style.visibility = "hidden";

    E1B.style.visibility = "visible";
    E1B.currentTime = 0;
    E1B.play();

    delay(7500).then(() => {
        //Apturēt video
      E1B.style.visibility = "hidden";   
        //Jaunā scēna
      E.style.visibility = "visible";
      //Pogas
      C2B_N.style.visibility = "visible";
      E1F_N.style.visibility = "visible";
    });
    });
}

function HtoH1S() {

    delay(450).then(() => {

    E1B_N.style.visibility = "hidden";
    H1S_N.style.visibility = "hidden";
    H2F_N.style.visibility = "hidden";
    H.style.visibility = "hidden";
    H1S.style.visibility = "visible";
    });
}

function H1StoH() {
    console.log("why?");
    delay(450).then(() => {

    H1S.style.visibility = "hidden";
    H.style.visibility = "visible";
    E1B_N.style.visibility = "visible";
    H1S_N.style.visibility = "visible";
    H2F_N.style.visibility = "visible";
    });
}

function HtoI() {

    E1B_N.style.visibility = "hidden";
    H1S_N.style.visibility = "hidden";
    H2F_N.style.visibility = "hidden";

    delay(1500).then(() => {

    H.style.visibility = "hidden";

    H2F.style.visibility = "visible";
    H2F.currentTime = 0;
    H2F.play();

    delay(7500).then(() => {
        //Apturēt video
      H2F.style.visibility = "hidden";   
        //Jaunā scēna
      I.style.visibility = "visible";
      //Pogas
      H2B_N.style.visibility = "visible";
      I1F_N.style.visibility = "visible";
    });
    });
}

function ItoH() {
  H2B_N.style.visibility = "hidden";

    delay(1500).then(() => {

    I.style.visibility = "hidden";

    H2B.style.visibility = "visible";
    H2B.currentTime = 0;
    H2B.play();

    delay(7500).then(() => {
        //Apturēt video
      H2B.style.visibility = "hidden";
        //Jaunā scēna
      H.style.visibility = "visible";
      //Pogas
      E1B_N.style.visibility = "visible";
      H1S_N.style.visibility = "visible";
      H2F_N.style.visibility = "visible";
    });
    });
}

function MtoI() {
      M1F_N.style.visibility = "hidden";
      M2F_N.style.visibility = "hidden";
      I1B_N.style.visibility = "hidden";
    delay(1500).then(() => {

    M.style.visibility = "hidden";

    I1B.style.visibility = "visible";
    I1B.currentTime = 0;
    I1B.play();

    delay(7500).then(() => {
        //Apturēt video
      I1B.style.visibility = "hidden";   
        //Jaunā scēna
      I.style.visibility = "visible";
      //Pogas
      I1F_N.style.visibility = "visible";
      H2B_N.style.visibility = "visible";
    });
    });
}

function ItoM() {
      H2B_N.style.visibility = "hidden";
      I1F_N.style.visibility = "hidden";
    delay(1500).then(() => {

    I.style.visibility = "hidden";

    I1F.style.visibility = "visible";
    I1F.currentTime = 0;
    I1F.play();

    delay(7500).then(() => {
        //Apturēt video
      I1F.style.visibility = "hidden";
        //Jaunā scēna
      M.style.visibility = "visible";
      //Pogas
      I1B_N.style.visibility = "visible";
      M1F_N.style.visibility = "visible";
      M2F_N.style.visibility = "visible";
    });
    });
}

function MtoG() {
      M1F_N.style.visibility = "hidden";
      M2F_N.style.visibility = "hidden";
      I1B_N.style.visibility = "hidden";
    delay(1500).then(() => {

    M.style.visibility = "hidden";

    M1F.style.visibility = "visible";
    M1F.currentTime = 0;
    M1F.play();

    delay(7500).then(() => {
        //Apturēt video
      M1F.style.visibility = "hidden";   
        //Jaunā scēna
      G.style.visibility = "visible";
      //Pogas
      C3B_N.style.visibility = "visible";
      M1B_N.style.visibility = "visible";
      G1S_N.style.visibility = "visible";
    });
    });
}

function GtoM() {
      C3B_N.style.visibility = "hidden";
      M1B_N.style.visibility = "hidden";
      G1S_N.style.visibility = "hidden";

    delay(1500).then(() => {

    G.style.visibility = "hidden";

    M1B.style.visibility = "visible";
    M1B.currentTime = 0;
    M1B.play();

    delay(7500).then(() => {
        //Apturēt video
      M1B.style.visibility = "hidden";
        //Jaunā scēna
      M.style.visibility = "visible";
      //Pogas
      M1F_N.style.visibility = "visible";
      I1B_N.style.visibility = "visible";
      M2F_N.style.visibility = "visible";

    });
    });
}

function MtoL() {

        delay(450).then(() => {
    M1F_N.style.visibility = "hidden";
    I1B_N.style.visibility = "hidden";
    M2F_N.style.visibility = "hidden";

    M.style.visibility = "hidden";
    L.style.visibility = "visible";
    M2B_N.style.visibility = "visible";
    L1F_N.style.visibility = "visible";

    });

}

function LtoM() {

  delay(450).then(() => {

    L.style.visibility = "hidden";
    M.style.visibility = "visible";
      M1F_N.style.visibility = "visible";
      I1B_N.style.visibility = "visible";
      M2F_N.style.visibility = "visible";
    M2B_N.style.visibility = "hidden";
        L1F_N.style.visibility = "hidden";

    });
}

function GtoG1S() {
    delay(450).then(() => {

    G.style.visibility = "hidden";
    G1S.style.visibility = "visible";
      C3B_N.style.visibility = "hidden";
      M1B_N.style.visibility = "hidden";
      G1S_N.style.visibility = "hidden";

    });
}

function G1StoG() {
    delay(450).then(() => {

    G1S.style.visibility = "hidden";
    G.style.visibility = "visible";
      C3B_N.style.visibility = "visible";
      M1B_N.style.visibility = "visible";
      G1S_N.style.visibility = "visible";

    });
}

function LtoN() {

  L1F_N.style.visibility = "hidden";
  M2B_N.style.visibility = "hidden";
    delay(1500).then(() => {

    L.style.visibility = "hidden";

    L1F.style.visibility = "visible";
    L1F.currentTime = 0;
    L1F.play();

    delay(7500).then(() => {
        //Apturēt video
      L1F.style.visibility = "hidden";
        //Jaunā scēna
      N.style.visibility = "visible";
      //Pogas
    L1B_N.style.visibility = "visible";
    N2F_N.style.visibility = "visible";
    N1F_N.style.visibility = "visible";
    });
    });
}

function NtoL() {

    N2F_N.style.visibility = "hidden";
    L1B_N.style.visibility = "hidden";
    N1F_N.style.visibility = "hidden";
    delay(1500).then(() => {

    N.style.visibility = "hidden";

    L1B.style.visibility = "visible";
    L1B.currentTime = 0;
    L1B.play();

    delay(7500).then(() => {
        //Apturēt video
      L1B.style.visibility = "hidden";
        //Jaunā scēna
      L.style.visibility = "visible";
      //Pogas
    L1F_N.style.visibility = "visible";
    M2B_N.style.visibility = "visible";
    });
    });
}

function NtoG() {
    delay(450).then(() => {
    N2F_N.style.visibility = "hidden";
    N1F_N.style.visibility = "hidden";
    L1B_N.style.visibility = "hidden";
    N.style.visibility = "hidden";
    G.style.visibility = "visible";
      C3B_N.style.visibility = "visible";
      M1B_N.style.visibility = "visible";
      G1S_N.style.visibility = "visible";
    });
}

function NtoP() {

    N2F_N.style.visibility = "hidden";
    L1B_N.style.visibility = "hidden";
    N1F_N.style.visibility = "hidden";
    delay(1500).then(() => {

    N.style.visibility = "hidden";

    N1F.style.visibility = "visible";
    N1F.currentTime = 0;
    N1F.play();

    delay(7500).then(() => {
        //Apturēt video
      N1F.style.visibility = "hidden";
        //Jaunā scēna
      P.style.visibility = "visible";
      //Pogas
    N1B_N.style.visibility = "visible";
    P1F_N.style.visibility = "visible";
    });
    });
}

function PtoN() {
    P1F_N.style.visibility = "hidden";
    N1B_N.style.visibility = "hidden";
    delay(1500).then(() => {

    P.style.visibility = "hidden";

    N1B.style.visibility = "visible";
    N1B.currentTime = 0;
    N1B.play();

    delay(7500).then(() => {
        //Apturēt video
      N1B.style.visibility = "hidden";
        //Jaunā scēna
      N.style.visibility = "visible";
      //Pogas
    L1B_N.style.visibility = "visible";
    N2F_N.style.visibility = "visible";
    N1F_N.style.visibility = "visible";
    });
    });
}

function DtoP() {


            delay(450).then(() => {
  B3B_N.style.visibility = "hidden";
  P1B_N.style.visibility = "hidden";
    D.style.visibility = "hidden";
    P.style.visibility = "visible";
    N1B_N.style.visibility = "visible";
    P1F_N.style.visibility = "visible";
    });
}

function PtoD() {

        delay(450).then(() => {
    N1B_N.style.visibility = "hidden";
    P1F_N.style.visibility = "hidden";
    P.style.visibility = "hidden";
    D.style.visibility = "visible";
    B3B_N.style.visibility = "visible";
    P1B_N.style.visibility = "visible";
    });
}


//FADE
function startBlackoutTwice() {
    fa.classList.remove("fade-twice");
    void fa.offsetWidth;
    fa.classList.add("fade-twice");

        fa.addEventListener("animationend", function handleAnimationEnd() {
        fa.classList.remove("fade-twice");
        fa.removeEventListener("animationend", handleAnimationEnd);
});
}

function startBlackoutOnce() {

    fa.classList.remove("fade-once");
    void fa.offsetWidth;
    fa.classList.add("fade-once");

        fa.addEventListener("animationend", function handleAnimationEnd() {
        fa.classList.remove("fade-once");
        fa.removeEventListener("animationend", handleAnimationEnd);
});
}

//DELAY implementation
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// SOUND //

    function playWalk() {
      const audioFiles = ['Audio/Walk_1.mp3', 'Audio/Walk_2.mp3', 'Audio/Walk_3.mp3'];
      const randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];

      const audio = document.getElementById("walkAudio");
      audio.src = randomFile;
      audio.play();
    }

      function playUpe() {
      const audio = document.getElementById("Upe");
      audio.play();
    }

      function playWalkToUpe() {
        playWalk();
        delay(9000).then(() => {
          const audio = document.getElementById("Upe");
          audio.play();
      });
    }

      function stopUpe() {
      const audio = document.getElementById("Upe");
      audio.pause();
      audio.currentTime = 0;
    }

      function playJura() {
      const audio = document.getElementById("Jura");
      audio.play();
    }

    function loopAudio(){
      audio_button.style.visibility = "hidden";
      anotacija.style.visibility = "hidden";
      const audio = document.getElementById("Audio");
      audio.play();
    }

      function stopAudio(){
        const audio = document.getElementById("Audio");
        audio.pause();
        audio.currentTime = 0;
      }

    function loopJuraAudio(){
      const audio = document.getElementById("JuraAudio");
      audio.play();
    }

      function stopJuraAudio(){
        const audio = document.getElementById("JuraAudio");
        audio.pause();
        audio.currentTime = 0;
      }


// keypresses

    document.addEventListener('keydown', function(event) {
      if (event.key === 'r' || event.key === 'R') {
        turnRed();
      } else if (event.key === 'e' || event.key === 'E') {
        startEnding();
      }
    });

    function turnRed(){
    // navigation_button.classList.toggle('active');
    navigation_button.forEach(navigation_button => navigation_button.classList.toggle('active'));
    }

//ENDINGGGGGGGGGGGGGGGGG YASSSSSSSSSSSSSSSSSSSSSSSSS//


    function countSteps() {
      x += 1;
      if (x === 10) {
        startEnding();
      }
    }

    function startEnding() {
      document.querySelectorAll('audio, video').forEach(media => {
        media.pause();
        media.currentTime = 0;
      });
      loopJuraAudio();
      fa.classList.remove("fade-twice");
      fa.classList.remove("fade-once");
      END.style.visibility = "visible";
      END_N1.style.visibility = "visible";
    }

    function N2() {

    delay(450).then(() => {
      END_N1.style.pointerEvents = "none";
      END_N2.style.visibility = "visible";
    });
    }

    function N3() {

    delay(450).then(() => {
      END_N2.style.pointerEvents = "none";
      END_N3.style.visibility = "visible";
      END_N4.style.visibility = "visible";
    });
    }

    function N4() {

    delay(450).then(() => {
      END_N3.style.pointerEvents = "none";
      END_N4.style.pointerEvents = "none";
      END_N5.style.visibility = "visible";
      END_N6.style.visibility = "visible";
      END_N7.style.visibility = "visible";
    });
    }

    function N5() {

    delay(450).then(() => {
      END_N5.style.pointerEvents = "none";
      END_N6.style.pointerEvents = "none";
      END_N7.style.pointerEvents = "none";

      END_N8.style.visibility = "visible";
      END_N9.style.visibility = "visible";
      END_N10.style.visibility = "visible";
      END_N11.style.visibility = "visible";
    });
    }

    function N6() {

    delay(450).then(() => {
      END_N1.style.visibility = "hidden";
      END_N2.style.visibility = "hidden";
      END_N3.style.visibility = "hidden";
      END_N4.style.visibility = "hidden";
      END_N5.style.visibility = "hidden";
      END_N6.style.visibility = "hidden";
      END_N7.style.visibility = "hidden";
      END_N8.style.visibility = "hidden";
      END_N9.style.visibility = "hidden";
      END_N10.style.visibility = "hidden";
      END_N11.style.visibility = "hidden";

      END_END.style.visibility = "visible";
    });
    }

    function reset(){
    delay(500).then(() => {
      location.reload();
    });
    }