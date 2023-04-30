import TemplateFactory from './factory-method?raw';
import TemplateAbstractFactory from './abstract-factory?raw';
import TemplateBuilder from './builder?raw';
import TemplatePrototype from './prototype?raw';
import TemplateSingleton from './singleton?raw';

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
	}
];
