<img src="https://capsule-render.vercel.app/api?type=Rounded&color=f4faa2&height=200&section=header&text=CAU%20IOT&desc=2024120378%20이한빈&descAlignY=80&fontSize=80">

# 1. Introduction

<img src="image/Corejs.jpg" width="400" height="600"/>

 본 글에서 사용된 코드 예제들은 정재남의 책인 "코어 자바스크립트"에서 발췌하였습니다. 해당 예제들은 자바스크립트 프로그래밍을 설명하고 실습할 때 사용되는 표준적인 예제로, 보다 깊이있는 이해를 위해 선택하였습니다. 각 예제들을 실제 VScode를 이용하여 구현하여 결과를 확인해보고 공부한 것을 정리하였습니다. 

# 2.  Index <br>
- ## [Chap 1](#chapter-1)<br>
  * ### [소개](#1장-소개)<br>
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

## Chapter 1 <br>
- ### 1장 소개<br>
   1장에서는 먼저 자바스크립트가 데이터를 처리하는 과정을 살펴봄으로써 데이터 타입과 관련된 중요한 개념들을 이해할 것 입니다. 자바스크립트 데이터 타입에는 크게 <b>기본형 타입(primitive type)</b>과 <b>참조형 타입(reference type)</b>이 있습니다. 기본형은 숫자(Number), 문자열(String), 불리안(Boolean), null 등이 있으며, 참조형은 객체가 있으며, 이는 배열(array), 함수(function) 등이 속해 있습니다. 두 가지 데이터 타입은 복제한다는 점에서 공통점을 가지고 있지만, 기본형은 <b>값이 담긴 주솟값을 복제</b>하는 반면, 참조형은 <b>값이 담긴 주솟값들로 이루어진 묶음을 가르키는 주소값을 복제</b>한다는 점에서 큰 차이가 있습니다. 또한, 기본형 데이터들은 기본적으로 <b>불변성(immutability)</b>을 띕니다. 이를 기본적으로 알아두고 예제를 통해 학습해봅시다.
---
- ### 예제 1-1<br>
  <div align="center">
    <img src="image/ch1/1-01.PNG">
    <p><b>예제 1-1. 변수 선언</b> </p>
  </div>
     <p>위의 예제는 a라는 변수를 선언한 예제입니다. 여기서, a는 변수이면서 식별자입니다. 컴퓨터 용어에서는 변수는 <b>변경 가능한 데이터가 담길 수 있는 공간 또는 그릇</b>이며, 식별자는 어떤 데이터를 식별하는 데 사용하는 이름, 간단히 말하면 <b>변수명</b>이라고 할 수 있습니다.
     </p>
---    
- ### 예제 1-2<br>
  <div align="center">
    <img src="image/ch1/1-02.PNG">
    <p><b>예제 1-2. 변수 선언과 할당</b> </p>
  </div>
     <p>앞선 예제는 변수의 선언만 했다면, 위의 예제에서는 변수의 선언과 할당이 이루어진 예제입니다. 위의 예제처럼 두 줄에 거쳐서 변수의 선언, 할당을 할 수 있으며, 한 줄에 변수의 할당과 선언을 한번에 할 수도 있습니다. 이 예제를 메모리 영역에서 본다면 아래 그림과 같습니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역1.jpg" width="500" height="200"/>
    <p><b>그림 1. 데이터 할당에 대한 메모리 영역의 변화1</b> </p>
  </div>
---
- ### 예제 1-3<br>
  <div align="center">
    <img src="image/ch1/1-03.PNG">
    <p><b>예제 1-3. 불변성</b> </p>
  </div>
     <p>변수(variable)와 상수(constant)를 구분하는 성질을 <b>'변경 가능성'</b>입니다. 변경 가능하면 변수, 불가능하다면 상수입니다. 즉, 변수는 데이터 할당이 이뤄진 변수 공간에 다른 데이터를 재할당할 수 있습니다. 이 2가지는 변수 영역의 메모리이며, 불변성 여부를 구분할 때의 변경 가능성의 대상은 데이터 영역 메모리입니다. 따라서, 앞에서 설명하였듯 기본형 데이터을 불변성띄기 때문에 변수 a에 문자열 'abc'를 할당했다가 뒤에 'def'를 추가하면 기존의 'abc'가 'abcdef'로 바뀌는 것이 아니라 <b>새로운 문자열 'abcdef'를 만들어 그 주소를 변수 a에 저장</b>합니다. 그림으로 표현하며 아래 그림과 같습니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역2.jpg" width="500" height="200"/>
    <p><b>그림 2. 데이터 할당에 대한 메모리 영역의 변화2</b> </p>
---
- ### 예제 1-4<br>
  <div align="center">
    <img src="image/ch1/1-04.PNG">
    <p><b>예제 1-4. 참조형 데이터의 할당</b> </p>
  </div>
     <p>앞선 예제는 기본형 데이터 변수에 대한 선언과 할당에 대해 살펴봤다면, 이번 예제부터는 참조형 데이터 변수에 관하여 살펴보겠습니다. 아래 그림은 참조형 데이터 할당을 메모리 영역에서 본 것입니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역3.jpg" width="500" height="300"/>
    <p><b>그림 3. 데이터 할당에 대한 메모리 영역의 변화3</b> </p>
  </div>
---
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
  </div>
---
- ### 예제 1-6<br>
  <div align="center">
    <img src="image/ch1/1-06.PNG">
    <p><b>예제 1-6. 중첩된 참조형 데이터(객체)의 프로퍼티 할당</b> </p>
  </div>
     <p>위 예제는 참조형 데이터의 프로퍼티에 다시 참조형 데이터를 할당하는 경우입니다. 아래 그림은 위 예제를 메모리 영역에서 본 것입니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역5.jpg" width="600" height="450"/>
    <p><b>그림 5. 데이터 할당에 대한 메모리 영역의 변화5</b> </p>
  </div>
---
- ### 예제 1-7<br>
  <div align="center">
    <img src="image/ch1/1-07.PNG">
    <p><b>예제 1-7. 변수 복사</b> </p>
  </div>
     <p>위 예제는 변수 복사에 대한 예제입니다. 메모리 영역에서 표현한 것을 간략하게 화살표와 노드를 이용하여 아래 그림처럼 나타냈습니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역6.jpg" width="400" height="250"/>
    <p><b>그림 6. 변수 복사에 대한 메모리 영역의 변화1</b> </p>
  </div>
---
- ### 예제 1-8<br>
  <div align="center">
    <img src="image/ch1/1-08.PNG">
    <p><b>예제 1-8. 변수 복사 이후 값 변경 결과 비교(1) - 객체의 프로퍼티 변경 시</b> </p>
  </div>
     <p>위 예제는 변수 복사이후 값 변경한 경우에 대한 예제입니다. 자바스크립트에서는 어떤 데이터 타입이든 변수에 할당하기 위해서는 주솟값을 복사해야 하기 때문에, 엄밀하게 말하자면 자바스크립트의 모든 데이터 타입은 참조형 데이터입니다. 다만 기본형은 주솟값을 복사하는 과정이 한 번만 이루어지고, 참조형은 한 단계를 더 거치게 된다는 차이가 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/메모리영역7.jpg" width="400" height="250"/>
    <p><b>그림 6. 변수 복사에 대한 메모리 영역의 변화1</b> </p>
  </div>
---
- ### 예제 1-9<br>
  <div align="center">
    <img src="image/ch1/1-09.PNG">
    <p><b>예제 1-9. 변수 복사 이후 값 변경 결과 비교(2) - 객체 자체를 변경했을 때</b> </p>
  </div>
     <p>예제 1-8에서는 객체의 프로퍼티를 변경했다면 예제 1-9에서는 객체 자체를 변경하였습니다. 이 때는 obj2가 obj1의 객체를 복사 후 obj1과는 아예 다른 주소를 참조하기 때문에 두 객체는 완전히 다릅니다.
     </p>
---
- ### 예제 1-10<br>
  <div align="center">
    <img src="image/ch1/1-10.PNG">
    <p><b>예제 1-10. 객체의 가변성에 따른 문제점</b> </p>
  </div>
     <p>예제 1-10에서는 가변 객체에 대한 문제점을 다루고 있습니다. user2는 user의 객체를 복사하였고 user2.name을 변경하려 했지만 user와 user2는 같은 주솟값을 복사하고 있습니다. 이에 따라 user2.name의 프로퍼티를 변경하는 것은 user.name의 프로퍼티가 변경된 결과를 낳았습니다. 이는 밑의 출력결과로 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-10r.PNG" width="300" height="100"/>
    <p><b>예제 1-10 - 출력결과</b> </p>
  </div>
---     
- ### 예제 1-11<br>
  <div align="center">
    <img src="image/ch1/1-11.PNG">
    <p><b>예제 1-11. 객체의 가변성에 따른 문제점의 해결 방법</b> </p>
  </div>
     <p>예제 1-10에서는 객체를 복사할 때 가변 객체일 때의 문제점에 대해 다루었습니다. 예제 1-11에서는 이를 해결하기 위해 changeNmae 함수가 새로운 객체를 반환하도록 수정하였습니다. 이렇게 되면 user와 user2는 서로 다른 객체이므로 이전과 같은 문제는 발생하지 않을 것입니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-11r.PNG" width="500" height="180"/>
    <p><b>예제 1-11 - 출력결과</b> </p>
  </div> 
---
- ### 예제 1-12<br>
  <div align="center">
    <img src="image/ch1/1-12.PNG">
    <p><b>예제 1-12. 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)</b> </p>
  </div>
     <p>예제 1-11에서는 changeName 함수가 새로운 객체를 반환하도록 수정하였습니다. 하지만 이는 복사할 user의 프로퍼티가 많아지면 일일히 코드를 쳐야하는 단점이 있습니다. 따라서 예제 1-12에서는 복사할 대상 객체의 프로퍼티 개수에 상관 없이 모든 프로퍼티를 복사할 수 있는 예제 코드입니다. 앞의 설명처럼 copyObject은 for in 문법을 이용하여 result 객체에 target 객체의 프로퍼티들을 복사하는 함수입니다. 
     </p>
---
- ### 예제 1-13<br>
  <div align="center">
    <img src="image/ch1/1-13.PNG">
    <p><b>예제 1-13. copyObject를 이용한 객체 복사</b> </p>
  </div>
     <p>예제 1-13은 예제 1-12에서 새로 만든 copyObject 함수를 이용하여 객체를 복사하는 예제 코드입니다. user2는 user를 복사하고 user2.name은 'Jung'으로 새로 할당합니다. 이를 console.log 매서드를 이용하여 결과를 확인해 보면 아래 결과와 같습니다. 우리가 바라는 대로 각 user의 name은 다르게 할당된 것을 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-13r.PNG" width="500" height="180"/>
    <p><b>예제 1-13 - 출력결과</b> </p>
  </div> 
---
- ### 예제 1-14<br>
  <div align="center">
    <img src="image/ch1/1-14.PNG">
    <p><b>예제 1-14. 중첩된 객체에 대한 얕은 복사</b> </p>
  </div>
     <p> 따로 언급하지는 않았지만 앞의 copyObject은 얕은 복사 함수입니다. 얕은 복사란, 바로 아래 단계의 값만 복사하는 방법입니다. 다시 말하자면 이는, 중첩된 객체에서 참조형 데이터가 저장된 프로퍼티를 복사할 때 그 주솟값만을 복사한다는 의미입니다. 따라서 예제 1-14의 출력 결과를 보면, urls라는 참조형 데이터에 대해서는 완전한 복사가 이루어지지 않아, 사본을 바꾸든 원본을 바꾸든 2개가 동시에 바꾸는 것을 확인할 수 있습니다
     </p>
  <div align="center">
    <img src="image/ch1/1-14r.PNG" width="500" height="180"/>
    <p><b>예제 1-14 - 출력결과</b> </p>
  </div>   
---
- ### 예제 1-15<br>
  <div align="center">
    <img src="image/ch1/1-15.PNG">
    <p><b>예제 1-15. 중첩된 객체에 대한 깊은 복사</b> </p>
  </div>
     <p> 앞선 예제에서 복사 대상이 침조형 데이터를 포함할 경우 완전한 복사가 이루어지지 않음을 확인하였다. 반대로, 깊은 복사는 복사 대상이 참조형 데이터를 포함하여도 완전히 복사할 수 있다. 예제 1-15의 2번째 쭐을 참고하면 user2는 기존의 user에 대한 복사 뿐 아니라, user.urls 즉, urls 프로퍼티에 대한 복사까지 진행하였습니다. 이렇게 코드를 구성하면 urls 프로퍼티 내부까지 복사하여 새로운 데이터가 만들어지므로 온전한 복사 즉, 깊은 복사가 이루어졌습니다. 예제 1-15의 출력 결과를 보면, 복사가 제대로 이루어졌음을 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-15r.PNG" width="500" height="180"/>
    <p><b>예제 1-15 - 출력결과</b> </p>
  </div>    
- - -
- ### 예제 1-16<br>
  <div align="center">
    <img src="image/ch1/1-16.PNG">
    <p><b>예제 1-16. 객체의 깊은 복사를 수행하는 범용 함수</b> </p>
  </div>
     <p> 예제 1-15를 참고하여 깊은 복사를 할 수 있는 copyObjectDeep이라는 함수를 새로 정의하였습니다. 이는 target이 null이 아니면서 객체인 경우 재귀적 구조를 통해 깊은 복사가 이루어지게 하였으며 객체가 아닐 경우에는 target을 복사하여 깊은 복사가 이루어지게 끔 구성하였습니다.
     </p>
---
- ### 예제 1-17<br>
  <div align="center">
    <img src="image/ch1/1-17.PNG">
    <p><b>예제 1-17. 깊은 복사 결과 확인</b> </p>
  </div>
     <p> 예제 1-16에서 깊은 복사를 하도록 하는 copyObjectDeep 함수를 만들어 보았다. 예제 1-17에서는 이를 확인해보았으며, 출력 결과를 보아 잘 작동함을 알 수 있다.
     </p>
  <div align="center">
    <img src="image/ch1/1-17r.PNG" width="1200" height="200"/>
    <p><b>예제 1-17 - 출력결과</b> </p>
  </div>  
  ---
- ### 예제 1-18<br>
  <div align="center">
    <img src="image/ch1/1-18.PNG">
    <p><b>예제 1-18. JSON을 활용한 간단한 깊은 복사</b> </p>
  </div>
     <p> 추가적으로 객체를 JSON 문법으로 표현된 문자열로 전환했다가 다시 JSON 객체로 바꾸는 방식을 이용하여 깊은 복사를 진행할 수 있습니다. 다만, 이 방법은 매서드나 숨겨전 프로퍼티인(__proto__) 또는 getter/setter 등 JSON으로 변경할 수 없는 프로퍼티들을 모두 무시합니다. 아래의 출력 결과를 보면 이를 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-18r.PNG" width="1200" height="200"/>
    <p><b>예제 1-18 - 출력결과</b> </p>
  </div>
---
- ### 예제 1-19<br>
  <div align="center">
    <img src="image/ch1/1-19.PNG">
    <p><b>예제 1-19. 자동으로 undefined를 부여하는 경우</b> </p>
  </div>
     <p> 자바스크립트에서는 undefined와 null은 다릅니다. 일반적으로 자바스크립트 코더들은 변수에 값이 없다면 null을 대입하여 undefined를 피하려고 합니다. 이를 통일하지 않으면 자신의 코드에 에러가 발생하였을 때 혼동이 올 수 있기 때문입니다. 자바스크립트는 세 가지 경우에 대해 자동으로 undeined를 부여합니다.<br> 
      1) 값을 대입하지 않은 변수, 즉 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근할 때<br>
      2) 객체 내부의 존재하지 않는 프로퍼티에 접근하려고 할 때<br> 
      3) return 문이 없거나 호출되지 않은 함수의 실행 결과<br>
      예제를 통해 이를 확인합니다.  
     </p>
  <div align="center">
    <img src="image/ch1/1-19r.PNG" width="800" height="400"/>
    <p><b>예제 1-19 - 출력결과</b> </p>
  </div>
---
- ### 예제 1-20<br>
  <div align="center">
    <img src="image/ch1/1-20.PNG">
    <p><b>예제 1-20. undefined와 배열</b> </p>
  </div>
     <p> 추가로 값을 대입하지 않은 배열에 대해서는 특이한 동작을 확인할 수 있습니다. 아래의 출력 결과를 확인해보면, 어느 값도 할당되지 않아 empty로 표시되는 것을 볼 수 있습니다. 이는 'undefined를 할당한 요소'랑은 완전히 다릅니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-20r.PNG" width="1200" height="350"/>
    <p><b>예제 1-20 - 출력결과</b> </p>
  </div>
---
- ### 예제 1-21<br>
  <div align="center">
    <img src="image/ch1/1-21.PNG">
    <p><b>예제 1-21. 빈 요소와 배열의 순회</b> </p>
  </div>
     <p> 이 예제는 빈 요소가 있는 배열에 대해 어떻게 순회하는 지 확인 해봅니다. function(v,i)에서 v는 value를 의미하고, i는 index를 의미합니다. 이 때, arr1, arr2에 대해 각 매서드의 출력을 확인해보면 arr2의 0번째 value는 비어있기 때문에 순회 대상에서 제외된 것을 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-21r.PNG" width="450" height="180"/>
    <p><b>예제 1-21 - 출력결과</b> </p>
  </div>
---
- ### 예제 1-22<br>
  <div align="center">
    <img src="image/ch1/1-22.PNG">
    <p><b>예제 1-22. undefined와 null의 비교</b> </p>
  </div>
     <p> 위 예제는 undefined으로 데이터를 할당했을 때 정상적으로 출력 결과가 나오는 것을 보며 이렇게 코드를 짤 시 생길 수 있는 혼동을 확인할 수 있었습니다. 따라서 자바스크립트에서는 <b>값이 없을 경우 'null'을 사용</b>할 것을 권장하며, 이 때 null의 typeof가 object라는 점을 주의해야 합니다. 이는 자바스크립트버그입니다. 또한 데이터 할당을 null로 하였을 때 동등 연산자(==)으로는 undefined와 구분할 수 없기 때문에 일치 연산자(===)을 사용해야 합니다. 이는 아래 예제 출력 결과로 확인할 수 있습니다.
     </p>
  <div align="center">
    <img src="image/ch1/1-22r.PNG" width="450" height="180"/>
    <p><b>예제 1-22 - 출력결과</b> </p>
  </div>
---
## Chapter 2



## Chapter 3
