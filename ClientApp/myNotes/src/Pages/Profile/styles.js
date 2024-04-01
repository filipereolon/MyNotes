import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> header {
		width: 100%;
		height: 144px;
		background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
		display: flex;
		align-items: center;
		padding: 0 124px;

		svg {
			color: ${({ theme }) => theme.COLORS.GRAY_100};
			font-size: 24px;
		}
	}
`

export const Form = styled.form`
	width: 380px;
	margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.div`
  width: 186px;
  position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;

	> img {
		width: 186px;
		border-radius: 50%;
	}
	> label {
		width: 48px;
		height: 48px;
		background-color: ${({ theme }) => theme.COLORS.ORANGE};
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 12px;

    &:hover {
      cursor: pointer;
    }
	}
  > input {
    display: none;
  }
  svg {
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  }
`
