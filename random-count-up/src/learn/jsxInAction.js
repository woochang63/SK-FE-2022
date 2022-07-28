import { EmojiOops, PrettyPrintCode } from 'components';

/* -------------------------------------------------------------------------- */

let error = null;

// 오류 메시지를 포함한 객체를 추가해보세요.
// error = {
//   name: 'UNKNOWN_ERROR',
//   __message: '알 수 없는 오류가 발생했습니다.',
//   log() {
//     console.log(`%c${this.__message}`, 'color: red; font-weight: 900;');
//   },
// };

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');
  error.log?.();

  return (
    <div className="container" style={{ padding: 20 }}>
      <h1
        className="headline"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {!error ? (
          'React 조건부 렌더링'
        ) : (
          <>
            <EmojiOops height={200} width={330} />
            <span className="errorInfo">
              {error.name}
              <br />
              {error.message}
            </span>
          </>
        )}
      </h1>
      {!error && <p>오류가 존재하면 렌더링 되도록 코드를 작성합니다.</p>}
    </div>
  );
};

/* -------------------------------------------------------------------------- */

// `api/db.json` 데이터에서 `navigation.items` 데이터를 화면에 출력해보세요.
const db = require('api/db.json');
const {
  navigation: { items },
} = db;

// `list` 매개 변수를 순환해 아이템 리스트를 반환하는 `renderList` 함수를 만들어 활용해봅니다.
const renderList = (list) =>
  list.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));

const ListItem = ({ item }) => (
  <li>
    <a href={item.link}>{item.text}</a>
  </li>
);

const ListRedering = () => {
  return (
    <div className="container">
      <h1 className="headline">React 리스트 렌더링 (배열)</h1>

      {/* 배열 리스트 렌더링 */}
      <nav className="globalNavigation">
        {/* 웹 표준을 준수해 비순차 목록을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        {/* <ul>{renderList(items)}</ul> */}
        <ul>
          {items.map((item) => (
            <ListItem key={item.link} item={item} />
          ))}
        </ul>
      </nav>

      {/* 객체 리스트 렌더링 */}
      <dl className="descriptionList">
        {/* 웹 표준을 준수해 설명 목록을 화면에 출력해봅니다. */}
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        <PrettyPrintCode />
      </dl>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

export const LearnApp = () => <ListRedering />;