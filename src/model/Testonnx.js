import React from 'react';
import { Tensor, InferenceSession } from "onnxjs";
import model from "./model5.onnx"

export default function TestModel(){
    const test = async ()=> {
        const sees = new InferenceSession({ backendHint: 'webgl' });
        await sees.loadModel(model)
        const input = Tensor(new Float32Array(7*7), 'float32', [64, 3, 7, 7])
        const outputMap = await sees.run([input])
        const outputTensor = outputMap.values().next().value
        console.log(outputTensor.data)
        console.log("test")
    }
    test()
    return (
        <h1> test</h1>
    )
}