import PropTypes from 'prop-types';
import { ReactComponent as NotCurrent } from '../../Assets/radioButton/not-current.svg'
import { ReactComponent as Current } from '../../Assets/radioButton/current.svg'
import { StyledLabel, StyledPositionName, StyledSelectText, StyledUl } from './Positions.styled';

export const PositionList = ({ positions, register, watch }) => {
  const position_id = Number(watch('position_id'))

  return (
    <>
      <StyledSelectText>Select your position</StyledSelectText>

      <StyledUl>
        {positions.map(({ id, name }) => (
          <li key={id}>
            <StyledLabel>
              {position_id === id ? <Current /> : <NotCurrent />}

              <StyledPositionName>
                {name}
              </StyledPositionName>

              <input
                {...register("position_id", { required: true })}
                type="radio"
                value={id}
                style={{ display: 'none' }}
                aria-label={name}
              />
            </StyledLabel>
          </li>
        ))}
      </StyledUl>
    </>
  );
}

PositionList.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired
};