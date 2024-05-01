<img src="https://capsule-render.vercel.app/api?type=Rounded&color=f4faa2&height=200&section=header&text=CAU%20IOT&desc=2024120378%20이한빈&descAlignY=80&fontSize=80">

# 1. Introduction

<img src="image/Corejs.jpg" width="400" height="600"/>

 본 글에서 사용된 코드 예제들은 정재남의 책인 "코어 자바스크립트"에서 발췌하였습니다. 해당 예제들은 자바스크립트 프로그래밍을 설명하고 실습할 때 사용되는 표준적인 예제로, 보다 깊이있는 이해를 위해 선택하였습니다. 각 예제들을 실제 VScode를 이용하여 구현하여 결과를 확인해보고 공부한 것을 정리하였습니다. 

# 2.  Index <br>
- ## [Chapter 1](#chapter-1)<br>
  * ### [1장 소개](#1장-소개)<br>
  * ### [예제 1-1 ~ 1.9](#예제-1-1) <br>
  * ### [예제 1-10 ~ 1.19](#예제-1-10) <br>
  * ### [예제 1-20 ~ 1.22](#예제-1-20) <br>
  
- ## [Chapter 2](#chapter2)
  * ### [2장 소개](#2장-소개)<br>
  * ### [예제 2-1 ~ 2.9](#예제-2-1) <br>
  * ### [예제 2-10 ~ 2.16](#예제-2-10) <br>
  
- ## [Chapter 3](#chapter3)
  * ### [3장 소개](#3장-소개)<br>
  * ### [예제 3-1 ~ 3.9](#예제-3-1) <br>
  * ### [예제 3-10 ~ 3.19](#예제-3-10) <br>
  * ### [예제 3-20 ~ 3.29](#예제-3-20) <br>
  * ### [예제 3-30 ~ 3.31](#예제-3-30) <br>

# 3. Example

- - -
## Chapter 1 <br>
- ### 1장 소개<br>
   1장에서는 먼저 자바스크립트가 데이터를 처리하는 과정을 살펴봄으로써 데이터 타입과 관련된 중요한 개념들을 이해할 것 입니다. 자바스크립트 데이터 타입에는 크게 <b>기본형 타입(primitive type)</b>과 <b>참조형 타입(reference type)</b>이 있습니다. 기본형은 숫자(Number), 문자열(String), 불리안(Boolean), null 등이 있으며, 참조형은 객체가 있으며, 이는 배열(array), 함수(function) 등이 속해 있습니다. 두 가지 데이터 타입은 복제한다는 점에서 공통점을 가지고 있지만, 기본형은 <b>값이 담긴 주솟값을 복제</b>하는 반면, 참조형은 <b>값이 담긴 주솟값들로 이루어진 묶음을 가르키는 주소값을 복제</b>한다는 점에서 큰 차이가 있습니다. 또한, 기본형 데이터들은 기본적으로 <b>불변성(immutability)</b>을 띕니다. 이를 기본적으로 알아두고 예제를 통해 학습해봅시다.
  
- ### 예제 1-1<br>
  <div align="center">
    <img src="image/ch1/1-01.PNG">
    <p><b>예제 1-1. 변수 선언</b> </p>
  </div>
     <p>위의 예제는 a라는 변수를 선언한 예제입니다. 여기서, a는 변수이면서 식별자입니다. 컴퓨터 용어에서는 변수는 <b>변경 가능한 데이터가 담길 수 있는 공간 또는 그릇</b>이며, 식별자는 어떤 데이터를 식별하는 데 사용하는 이름, 간단히 말하면 <b>변수명</b>이라고 할 수 있습니다.
     </p>
       
- ### 예제 1-2<br>
  <div align="center">
    <img src="image/ch1/1-02.PNG">
    <p><b>예제 1-2. 변수 선언과 할당</b> </p>
  </div>
     <p>앞선 예제는 변수의 선언만 했다면, 위의 예제에서는 변수의 선언과 할당이 이루어진 예제입니다. 위의 예제처럼 두 줄에 거쳐서 변수의 선언, 할당을 할 수 있으며, 한 줄에 변수의 할당과 선언을 한번에 할 수도 있습니다. 이 예제를 메모리 영역에서 본다면 아래 그림과 같습니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역1.jpg" width="500" height="200"/>
    <p><b>그림 1. 데이터 할당에 대한 메모리 영역의 변화</b> </p>
  </div>

- ### 예제 1-3<br>
  <div align="center">
    <img src="image/ch1/1-03.PNG">
    <p><b>예제 1-3. 불변성</b> </p>
  </div>
     <p>변수(variable)와 상수(constant)를 구분하는 성질을 <b>'변경 가능성'</b>입니다. 변경 가능하면 변수, 불가능하다면 상수입니다. 즉, 변수는 데이터 할당이 이뤄진 변수 공간에 다른 데이터를 재할당할 수 있습니다. 이 2가지는 변수 영역의 메모리이며, 불변성 여부를 구분할 때의 변경 가능성의 대상은 데이터 영역 메모리입니다. 따라서, 앞에서 설명하였듯 기본형 데이터을 불변성띄기 때문에 변수 a에 문자열 'abc'를 할당했다가 뒤에 'def'를 추가하면 기존의 'abc'가 'abcdef'로 바뀌는 것이 아니라 <b>새로운 문자열 'abcdef'를 만들어 그 주소를 변수 a에 저장</b>합니다. 그림으로 표현하며 아래 그림과 같다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역2.jpg" width="500" height="200"/>
    <p><b>그림 2. 데이터 할당에 대한 메모리 영역의 변화2</b> </p>

- ### 예제 1-4<br>
  <div align="center">
    <img src="image/ch1/1-04.PNG">
    <p><b>예제 1-4. 참조형 데이터의 할당</b> </p>
  </div>
     <p>앞선 예제는 기본형 데이터 변수에 대한 선언과 할당에 대해 살펴봤다면, 이번 예제부터는 참조형 데이터 변수에 관하여 살펴보겠습니다. 아래 그림은 참조형 데이터 할당을 메모리 영역에서 본 것 입니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역3.jpg" width="500" height="300"/>
    <p><b>그림 3. 데이터 할당에 대한 메모리 영역의 변화3</b> </p>
  </div>

- ### 예제 1-5<br>
  <div align="center">
    <img src="image/ch1/1-05.PNG">
    <p><b>예제 1-5. 참조형 데이터의 프로퍼티 재할당</b> </p>
  </div>
     <p>위 예제는 참조형 데이터의 프로퍼티 재할당을 다룬 예제입니다. 기본형 데이터와 마찬가지로 새로운 데이터를 만들고 그 주소를 a에 저장합니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역2.jpg" width="550" height="300"/>
    <p><b>그림 4. 데이터 할당에 대한 메모리 영역의 변화4</b> </p>
- - -
## Chapter 2

- - - 

## Chapter 3
