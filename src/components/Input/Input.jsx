import icon from '../../assets/sprite.svg';
import {
  InfoIcon,
  Label,
  InputArea,
  LabelContainer,
  InputContainer,
  SearchIcon,
  HelpIcon,
  Badge,
} from './Input.styled';

const Input = () => {
  return (
    <>
      <LabelContainer>
        <Label htmlFor="custom-input">Email</Label>
        <InfoIcon>
          <use href={`${icon}#icon-help-circle`}></use>
        </InfoIcon>
      </LabelContainer>

      <InputContainer>
        <InputArea
          type="text"
          id="custom-input"
          name="custom-input"
          placeholder="Input..."
        />
        <SearchIcon>
          <use href={`${icon}#icon-search-lg`}></use>
        </SearchIcon>
        <HelpIcon>
          <use href={`${icon}#icon-help-circle`}></use>
        </HelpIcon>

        <Badge>⌘K</Badge>
      </InputContainer>

      <div>This is a hint text to help user.</div>
    </>
  );
};

export default Input;

// const Input = ({ labelText, placeholder, hintText }) => {
//   return (
//     <>
//       <label htmlFor="">{labelText}</label>
//       {/* <svg>
//             <use href={}></use>
//           </svg> */}
//       <input placeholder={placeholder}></input>
//       <div>{hintText}</div>
//     </>
//   );
// };

// const Input = ({ input: { id }, labelText, placeholder, hintText }) => {
//   return (
//     <>
//       <LabelContainer>
//         <Label
//           htmlFor="custom-input"
//           // htmlFor={`custom-input-${id}`}
//         >
//           {labelText}
//         </Label>
//         <InfoIcon>
//           <use href={`${icon}#icon-help-circle`}></use>
//         </InfoIcon>
//       </LabelContainer>

//       <InputContainer>
//         <InputArea
//           type="text"
//           id="custom-input"
//           // id={`custom-input-${id}`}
//           name="custom-input"
//           placeholder={placeholder}
//         />
//         <SearchIcon>
//           <use href={`${icon}#icon-search-lg`}></use>
//         </SearchIcon>
//         <HelpIcon>
//           <use href={`${icon}#icon-help-circle`}></use>
//         </HelpIcon>

//         <Badge>⌘K</Badge>
//       </InputContainer>

//       <div>{hintText}</div>
//     </>
//   );
// };
