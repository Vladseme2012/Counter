import {useState, useEffect, ChangeEvent} from 'react';

import './App.css';
import {Wrapper} from './components/Wrapper/Wrapper.tsx';
import {Container} from './components/Container/Container.tsx';
import {Button} from './components/Button/Button.tsx';
import {Input} from './components/Input/Input.tsx';
import {Title} from './components/Title/Title.tsx';

export const App = () => {
    const [startValue, setStartValue] = useState<string>('0');
    const [maxValue, setMaxValue] = useState<string>('0');
    const [count, setCount] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        let storageStartValue = localStorage.getItem('startValue');
        let storageMaxValue = localStorage.getItem('maxValue');
        if (storageStartValue) {
            setStartValue(JSON.parse(storageStartValue));
        }
        if (storageMaxValue) {
            setMaxValue(JSON.parse(storageMaxValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [startValue, maxValue]);

    const incrementButtonHandler = () => {
        if (count < Number(maxValue)) {
            setCount(count + 1);
        }
    };

    const resetCountHandler = () => {
        setCount(0);
    };

    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value);
    };

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value);
    };

    const setValuesButtonHandler = () => {
        if (Number(startValue) < Number(maxValue)) {
            setCount(Number(startValue));
            setIsVisible(prev => !prev);
        }
    };

    const openWindowSetValueHandler = () => {
        setIsVisible(prev => !prev);
    };

    const incorrectValueInput = Number(maxValue) < Number(startValue) || ((Number(maxValue) > 0 && Number(startValue) > 0) && Number(maxValue) === Number(startValue));
    const correctValueInput = Number(startValue) === Number(maxValue);

    return (
        <div className="app">
            {isVisible ? (<Wrapper>
                <Container className={'input-container'}>
                    <Container className={'title-input-container'}>
                        <Title className={'title'}>{'max value:'}</Title>
                        <Input className={incorrectValueInput ? 'input-error' : 'input'} type={'number'} min={'0'}
                               max={'100'} value={maxValue}
                               onChange={setMaxValueHandler}/>
                    </Container>
                    <Container className={'title-input-container'}>
                        <Title className={'title'}>{'start value:'}</Title>
                        <Input className={incorrectValueInput ? 'input-error' : 'input'} type={'number'} min={'0'}
                               max={'100'} value={startValue}
                               onChange={setStartValueHandler}/>
                    </Container>
                </Container>
                <Container className={'button-container'}>
                    <Button className={'button'} onClick={setValuesButtonHandler}
                            disabled={incorrectValueInput}>set</Button>
                </Container>
            </Wrapper>) : (<Wrapper>
                <Container className={'count-container'}>
                    {incorrectValueInput ? (
                            <Title className={'text-error'}>{'Incorect value'}</Title>) :
                        correctValueInput ?
                            (<Title className={'text'}>{'Enter values and press \'set\''}</Title>) :
                            (<Title
                                className={count === Number(maxValue) ? 'count-disabled' : 'count'}>{count}</Title>)}
                </Container>
                <Container className={'button-container'}>
                    <Button className={'button'} onClick={incrementButtonHandler}
                            disabled={count === Number(maxValue)}>inc</Button>
                    <Button className={'button'} onClick={resetCountHandler}>reset</Button>
                    <Button className={'button'} onClick={openWindowSetValueHandler}>set</Button>
                </Container>
            </Wrapper>)


            }
            {/*<Wrapper>*/}
            {/*    <Container className={'input-container'}>*/}
            {/*        <Container className={'title-input-container'}>*/}
            {/*            <Title className={'title'}>{'max value:'}</Title>*/}
            {/*            <Input className={incorrectValueInput ? 'input-error' : 'input'} type={'number'} min={'0'}*/}
            {/*                   max={'100'} value={maxValue}*/}
            {/*                   onChange={setMaxValueHandler}/>*/}
            {/*        </Container>*/}
            {/*        <Container className={'title-input-container'}>*/}
            {/*            <Title className={'title'}>{'start value:'}</Title>*/}
            {/*            <Input className={incorrectValueInput ? 'input-error' : 'input'} type={'number'} min={'0'}*/}
            {/*                   max={'100'} value={startValue}*/}
            {/*                   onChange={setStartValueHandler}/>*/}
            {/*        </Container>*/}
            {/*    </Container>*/}
            {/*    <Container className={'button-container'}>*/}
            {/*        <Button className={'button'} onClick={setValuesButtonHandler}*/}
            {/*                disabled={incorrectValueInput}>set</Button>*/}
            {/*    </Container>*/}
            {/*</Wrapper>*/}
            {/*<Wrapper>*/}
            {/*    <Container className={'count-container'}>*/}
            {/*        {incorrectValueInput ? (*/}
            {/*                <Title className={'text-error'}>{'Incorect value'}</Title>) :*/}
            {/*            correctValueInput ?*/}
            {/*                (<Title className={'text'}>{'Enter values and press \'set\''}</Title>) :*/}
            {/*                (<Title*/}
            {/*                    className={count === Number(maxValue) ? 'count-disabled' : 'count'}>{count}</Title>)}*/}
            {/*    </Container>*/}
            {/*    <Container className={'button-container'}>*/}
            {/*        <Button className={'button'} onClick={incrementButtonHandler}*/}
            {/*                disabled={count === Number(maxValue)}>inc</Button>*/}
            {/*        <Button className={'button'} onClick={resetCountHandler}>reset</Button>*/}
            {/*    </Container>*/}
            {/*</Wrapper>*/}
        </div>
    );
};


