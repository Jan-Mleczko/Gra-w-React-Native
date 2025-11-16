/*GRA W KOSCI JAKO APLIKACJA REACT NATIVE - Jan Mleczko, 2025*/

import React, {useRef, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Canvas from 'react-native-canvas';

import Gra from "./gra.js";

Gra.poczatek ();

let ekran = null;
function odswEkran () {
  if (ekran)
    Gra.uzysObraz ().rysuj (ekran);
}

function klikniecie (evt) {
  wymagTykanie = Gra.dotkniecie (
    Math.floor (evt.nativeEvent.locationX),
    Math.floor (evt.nativeEvent.locationY)
  );
  odswEkran ();
}

let rozpTykanie = true;
let wymagTykanie = 0;

function tykanie () {
  if (wymagTykanie > 0) {
    Gra.tykniecie ();
    odswEkran ();
    --wymagTykanie;
  }
}

export default function App () {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(9, 130, 59)" }}>
      <TouchableOpacity onPress={klikniecie} style={{ flex: 1, flexGrow: 1 }}>
      <Canvas style={{width: 640, height: 360, borderWidth: 1,
                      borderColor: "rgb(9, 130, 59)",
                      transform: "scale(0.875) rotate(90deg) translate(150px, 180px)"}}
        ref={(cnv) => {
          if (cnv) {
            cnv.width = 640;
            cnv.height = 360;
            const ctx = cnv.getContext ("2d");
            ekran = ctx;
            odswEkran ();
            if (rozpTykanie) {
              rozpTykanie = false;
              setInterval (tykanie, 500);
            }
          }
        }}
      />
    </TouchableOpacity>
    </SafeAreaView>
  );
 };