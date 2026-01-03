import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 从后端API获取题目数据
    const fetchQuestions = async () => {
      try {
        // 使用环境变量获取API地址，本地开发默认使用http://localhost:3000
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const response = await fetch(`${apiUrl}/api/questions`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (isLoading) {
    return <div className="app"><h1>加载中...</h1></div>;
  }

  if (error) {
    return <div className="app"><h1>错误：{error}</h1></div>;
  }

  return (
    <div className="app">
      <h1>银行场景智能题应用</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;