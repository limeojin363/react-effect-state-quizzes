const Description = () => {
  return (
    <div className="p-4 flex flex-col gap-1 text-gray-800">
      <h1 className="font-bold text-lg">Description</h1>
      <ul>
        <li>
          useEffect의 dependency 중 `log` 함수는 리렌더링을 유발하지 않으니
          신경쓰지 않으셔도 됩니다.
        </li>
        <li>정답 입력 후 비교하는 기능도 제작 예정입니다.</li>
      </ul>
    </div>
  );
};

export default Description;
