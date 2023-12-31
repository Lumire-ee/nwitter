Reack Hooks / useContext

- CreateContext : Context객체 생성
- Provider : Context를 하위 컴포넌트에 전달 (공급자)
- Consumer : Context의 변화 감지 컴포넌트

useContext의 전달 인자는 context객체 그 자체여야함.

<MyContext.Provider>가 갱신되면 가장 최신의 context value로 렌더 트리거.

const themes = {
light : {
foreground : "#000000",
background : "#eeeeee",
},
dark : {
foreground : "#ffffff",
background : "#222222",
}
};

<!-- Consumer? -->

const ThemeContext = React.createContext(themes.light);

<!-- Context 객체 생성 -->

function App () {
return (
<ThemeContext.Provider value={themes.dark}>
</Toolbar />
</ThemeContext.Provider>

 <!-- Provider로 공급. -->

);
}

function Toolbar(props) {
return (

<div>
<ThemeButton />
</div>
);
}

function ThemeButton () {
const theme = useContext(ThemeContext);
return (
<button style ={{ background : theme.background, color : theme.foreground }}>
Styled By Theme Context
</button>
);
}

<!-- Encountered two children with the same key -->

DummyData사용시 중복키 사용하는지 확인

<!-- 시간비교 -->

바닐라자스에서는 시,분,초까지 비교

<!-- Optimization -->

컴포넌트 리렌더링 낭비 최적화
// 날짜변경시 렌더링낭비

React.memo (Memoization, HOC)
props변화에만 영향 / state, context변화시 재렌더링
useState로 전달받은 상태변화함수가 아니거나(setState는 자동으로 useCallback처리),
useCallback으로 묶어둔 함수가 아니라면 React.memo로 감싸둔 컴포넌트도 재렌더링됨.

useCallback은 주로 자식컴포넌트에 전달되는 콜백함수를 최적화할 때 사용

<!-- Deploy -->

코드 / 파일 압축 (Build)
serve -s build시

- CategoryInfo : 보안 오류: (:) [], PSSecurityException
- FullyQualifiedErrorId : UnauthorizedAccess
  발생 시
  ExecutionPolicy (현재 상태 확인) / Restriced(모든 스크립트 막음)으로 되어있다면
  Set-ExecutionPolicy명령어로 Unrestriced로 설정

<!-- Build / Test -->

App.js 45~

useEffect(() => {
const localData = localStorage.getItem("diary");
if (localData) {
const diaryList = JSON.parse(localData).sort(
(a, b) => parseInt(b.id) - parseInt(a.id)
);

        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });

    }

}, []);

Storage의 모든 데이터를 삭제했을 때 localData가 Trusy기 때문에 로직을 수행하지만
dataId.current = parseInt(diaryList[0].id) + 1;
구문을 수행할 때 빈 배열의 id값을 참조해서 사용하기에 Cannot read properties of undefined (reading 'id')에러 발생.

if (diaryList.lengh >= 1) 구문으로 조건 만족시에만 로직 실행하게끔 변경.

<!-- Open Graph Protocol -->

meta data / property
og:title, og:description, og:image, og:url

Sharing Debugger로 테스트하는걸 추천.
공유하기로 테스트 진행하면 캐시 초기화해야함.
