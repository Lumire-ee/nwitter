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
