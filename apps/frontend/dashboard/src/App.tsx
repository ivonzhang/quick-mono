import { Input } from '@my-org/ui';
// 使用另一种方式导入 ui 库
import { Button } from '@my-org/ui/esm';

import './App.css'

function App() {
  return (
    <div>
      <div>使用了 @my-org/ui 库中的 Input 组件</div>
      <Input />
      <div>
        <Button onClick={() => alert("哈哈哈")}>哈哈哈哈</Button>
      </div>
    </div>
  )
}

export default App
