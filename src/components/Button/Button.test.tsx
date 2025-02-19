import { render, screen } from "@testing-library/react";
import Button from "./index";
import { expect } from 'vitest'

describe("버튼 컴포넌트 테스트", () => {
  it("버튼 내 요소를 넣었을 때 해당 요소가 렌더링 되어야 함", () => {
    const buttonText = "버튼 텍스트";
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  })

  it("버튼의 사이즈를 medium으로 설정했을 때 medium 사이즈로 렌더링 되어야 함", () => {
    render(<Button size="medium">버튼</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ fontSize: '16px', padding: '8px 16px' });
  });

  it("disabled 속성을 설정했을 때 버튼이 비활성화 되어야 함", () => {
    render(<Button disabled>버튼</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  })

})
