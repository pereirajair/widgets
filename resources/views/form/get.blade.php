@extends('forms::basic')

@section('content')

    {!! Form::open(['action' => 'FormController@postForm', 'class'=>'form-horizontal']) !!}

    <div style="margin: 15px 0">

        {!! cForm::text(
            'input',
            null,
            [],
            ['label'=>'Texto']
        )!!}

        {!! cForm::checkbox(
            'checkbox',
            1,
            null,
            [],
            ['label'=>'Checkbox']
        )!!}


        {!! cForm::select(
            'select',
            [
                '1'=>'Primeira opção',
                '2'=>'Segunda opção',
                '3'=>'Terceira opção',
            ],
            null,
            ['placeholder'=>' -- Selecione uma opção -- '],
            ['label'=>'Combobox']
        )!!}

    </div>

    <div class="form-actions fluid text-center">
        <button type="submit" class="btn btn-primary">Enviar</button>
    </div>

    {!! Form::close() !!}

@stop