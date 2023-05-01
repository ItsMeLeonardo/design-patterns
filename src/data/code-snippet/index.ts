import TemplateFactory from './factory-method?raw';
import TemplateAbstractFactory from './abstract-factory?raw';
import TemplateBuilder from './builder?raw';
import TemplatePrototype from './prototype?raw';
import TemplateSingleton from './singleton?raw';

import Adapter from './adapter?raw';
import Composite from './composite?raw';
import Decorator from './decorator?raw';

import ChainOfResponsibility from './chain-of-responsibility?raw';
import Memento from './memento?raw';
import Observer from './observer?raw';

export const snippetList = [
	{
		name: 'factory-method',
		code: TemplateFactory
	},
	{
		name: 'abstract-factory',
		code: TemplateAbstractFactory
	},
	{
		name: 'builder',
		code: TemplateBuilder
	},
	{
		name: 'prototype',
		code: TemplatePrototype
	},
	{
		name: 'singleton',
		code: TemplateSingleton
	},
	{
		name: 'adapter',
		code: Adapter
	},
	{
		name: 'composite',
		code: Composite
	},
	{
		name: 'decorator',
		code: Decorator
	},
	{
		name: 'chain-of-responsibility',
		code: ChainOfResponsibility
	},
	{
		name: 'memento',
		code: Memento
	},
	{
		name: 'observer',
		code: Observer
	}
];
