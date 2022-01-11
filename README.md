## 리덕스의 액션
- 그냥 객체 (object)
- 두가지 형태 액션 존재
    - {type: 'TEST' } / payload 없음
    - {type: 'TEST', params: 'hi' } / payload 있음
- type 만이 필수 프로퍼티, type은 문자열
- 대문자 + 언더바 + 대문자 이런식으로 액션 타입을 만듬.

### 리덕스의 액션 생성자
- 액션을 생성하는 함수를 액션 생성자라고 함.
- 함수를 통해 액션을 생성하여 액션 객체를 리턴
- createTest('hi'); / {type: 'TEST', params: 'hi'}리턴

### 리덕스의 액션은 어떤 일을 하나요?
- 액션 생성자를 통해 액션을 만듬
- 만든 액션 객체를 리덕스 스토어에 보냄
- 리덕스 스토어가 액션 객체를 받으면 스토어의 상태값이 변경됨.
- 변견된 상태값에 의해 상태를 이용하고 있는 컴포넌트가 변경됨.
- 액션은 스토어에 보내는 일종의 인풋.

### 액션을 준비하기 위해 필요한 것
- 액션의 타입을 정의하여 변수로 빼는 단계 / 강제는아님
    - 실수 유발 막기위해 하는 것
    - 미리 정의한 변수를 사용하면, 스펠링에 주의를 덜 기울여도 됨.
- 액션 객체를 만들어 내는 함수를 만드는 단계
    - 하나의 액션 객체를 만들기 위해 하나의 함수를 만들어냄
    - 액션의 타입은 미리 정의한 타입 변수로 부터 가져와서 사용함.

### 리덕스의 리듀서
- 액션을 주면, 액션이 적용되어 달라진 결과를 만들어줌.
- 그냥함수임
- 시간에 따라 변경되는 함수들은 들어가면 안됨

```
function reducer(previousState, action){
    return newState;
}
```
- 액션을 받아서 스테이트를 리턴하는 구조
- 인자로 들어오는 previousState와 리턴되는 newState는 다른 참조를 가지도록 해야함

## 스토어를 만드는 함수
```
const store = createStore(reducer);

```

## store
- store.getState();
- store.dispatch(action); / store.dispatch(액션생성자());
```
const unsubscribe = store.subscribe( () => {

});
```
- 리턴이 unsubscribe임!!!!!
- unsubscribe(); 하면 제거됨 

### react-redux
- Provider 컴포넌트를 제공해줌.
- connect 함수를 통해 "컨테이너"를 만듬.
    - 컨테이너는 스토어의 state와 dispatch를 연결한 컴포넌트에 props로 넣어주는 역할을 합니다.
    - 필요한것
        - 어떤 state를 어떤 props에 연결할 것인지에 대한 정의
        - 어떤 dispatch(액션)를 어떤 props에 연결할 것인지에 대한 정의
        - 그 props를 보낼 컴포넌트의 정의

