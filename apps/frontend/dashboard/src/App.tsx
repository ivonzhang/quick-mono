import { useCallback } from 'react';

import { Input } from '@my-org/ui';
// 使用另一种方式导入 ui 库
// import { Button } from '@my-org/ui/esm'; // 说明：这种方式也可以，但是不推荐，因为会导致本地开发时热更新失效
import { Button } from '@my-org/ui';
import { sayHello } from '@my-org/tools';

import './App.css'

function App() {
  const handleClick = useCallback(() => {
    alert(sayHello('zhangivon'));
  }, []);

  return (
    <div>
      <div>使用了 @my-org/ui 库中的 Input 组件</div>
      <Input />
      <div>
        <Button onClick={handleClick}>哈哈哈哈</Button>
      </div>
    </div>
  )
}

export default App
