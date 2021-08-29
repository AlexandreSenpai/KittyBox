import React, {
  useEffect,
  useRef,
  ChangeEvent,
  useCallback,
  useState,
} from "react"
import { useField } from "@unform/core"
import AddBoxIcon from "@material-ui/icons/AddBox"

export { Form } from "@unform/web"

export function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ""
      },
    })
  }, [fieldName, registerField])
  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export function FileInput({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref) {
        ref.value = ""
        setPreview(null)
      },
      setValue(_, value) {
        setPreview(value)
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      <label
        htmlFor="mediaInput"
        style={{ fontSize: "2.5rem", cursor: "pointer", color: "inherit" }}
      >
        <AddBoxIcon fontSize="inherit" />
      </label>
      <input
        id="mediaInput"
        style={{ display: "none" }}
        type="file"
        ref={inputRef}
        {...rest}
      />
    </>
  )
}
