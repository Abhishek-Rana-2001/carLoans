import { useEffect, useState } from "react";
import MoneyField from "../fields/MoneyField";
import DateField from "../fields/DateField";
import SelectRadioInput from "../fields/SelectRadioInput";
import { questions } from "../../static/questions";
import ProgressBar from "../progressbar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { defaultSchema } from "../../static/formDataSchema";
import useFormContext from "../../hooks/useFormContext";
import { isAboveEighteen } from "../../util/helperFunctions";
import MultipleInput from "../fields/MultipleInput";
import SelectAndInput from "../fields/SelectAndInput";

const ApplicationForm = () => {
  const { step, setStep, formData, setFormData } = useFormContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (formData[questions[step].fieldName] === "") {
      setError("Please enter a value details");
      return;
    }
    if (questions[step].type === "date") {
      if (!isAboveEighteen(formData[questions[step].fieldName])) {
        setError("You should be atleast 18 years old");
        return;
      }
    }
    setError(null);
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBack = () => {
    if (step === 0) {
      navigate(-1);
      return;
    }
    setStep(step - 1);
    setError(null);
  };

  useEffect(() => {
    return () => {
      setStep(0);
      setFormData(defaultSchema);
    };
  }, []);

  return (
    <form
      className="flex flex-col h-max gap-10 w-full items-center justify-between"
      onSubmit={handleSubmit}
    >
      <ProgressBar progress={step + 1} total={questions.length} />
      {/* <div className="absolute w-full bg-red-500 h-10 z-10"></div> */}
      <div className="flex flex-col gap-4 items-center text-center">
        <h3 className="text-3xl">{questions[step]?.question}</h3>
        {questions[step].subtext && (
          <label className="text-sm">{questions[step]?.subtext}</label>
        )}
      </div>
      <div className="middle-section w-full flex flex-col gap-2 items-center">
        <div className="w-full flex gap-y-5 gap-x-3 justify-center items-center flex-wrap">
          {questions[step].type === "select" &&
            questions[step].options.map((option, index) => {
              return (
                <div
                  key={index}
                  className="sm:w-2/5 w-full flex justify-center"
                >
                  <SelectRadioInput
                    value={option.value}
                    fieldName={questions[step].fieldName}
                    onChange={handleChange}
                    selectedField={formData[questions[step].fieldName]}
                  >
                    {option.name}
                  </SelectRadioInput>
                </div>
              );
            })}

          {questions[step].type === "date" && (
            <DateField
              date={formData.dob}
              setDate={handleChange}
              fieldName={"dob"}
            />
          )}

          {questions[step].type === "money" && (
            <MoneyField
              value={formData.income}
              setValue={handleChange}
              fieldName={"income"}
            />
          )}

          {questions[step].type === "multipleTextInput" && (
            <MultipleInput
              fields={questions[step].fields}
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {questions[step].type === "selectandinput" && (
            <SelectAndInput
              fields={questions[step].fields}
              formData={formData}
              setFormData={setFormData}
              onChange={handleChange}
            />
          )}
        </div>
        {error && (
          <span className="text-xs text-center text-red-400">*{error}</span>
        )}
      </div>

      <div className="w-full flex justify-between">
        <button
          className="flex items-center justify-center px-5 py-2 rounded-lg hover:shadow-md hover:scale-[1.02] transition-all duration-200 border border-slate-300 shadow-md font-semibold tracking-wider text-lg"
          type="button"
          onClick={handleBack}
        >
          Back
        </button>

        {step === questions.length - 1 ? (
          <button
            className="flex items-center justify-center px-5 py-2 rounded-lg bg-purple-500 shadow-md hover:scale-[1.02] transition-all duration-200 text-white font-semibold tracking-wider text-lg"
            type="submit"
          >
            Submit
          </button>
        ) : (
          <button
            className="flex items-center justify-center px-5 py-2 rounded-lg bg-purple-500 shadow-md hover:scale-[1.02] transition-all duration-200 text-white font-semibold tracking-wider text-lg"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </form>
  );
};

export default ApplicationForm;
