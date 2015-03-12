"use strict";var utils={leadingZero:function leadingZero(n){if(n < 10)n = "0" + n;return n;}, extract:function extract(date){var y=date.getFullYear(), m=this.leadingZero(date.getMonth() + 1), d=this.leadingZero(date.getDate()), h=this.leadingZero(date.getHours()), mi=this.leadingZero(date.getMinutes());return [y, m, d, h, mi];}, startOfWeek:function startOfWeek(date){var diff=date.getDate() - date.getDay() + (date.getDay() === 0?-6:1);return new Date(date.setDate(diff));}, endOfWeek:function endOfWeek(date){var sunday=date.getDate() - (date.getDay() - 1) + 6;return new Date(date.setDate(sunday));}, startOfMonth:function startOfMonth(date){return new Date(date.getFullYear(), date.getMonth(), 1);}, endOfMonth:function endOfMonth(date){return new Date(date.getFullYear(), date.getMonth() + 1, 0);}, daysInMonth:function daysInMonth(date){return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();}, daysBetween:function daysBetween(d1, d2){var day=24 * 60 * 60 * 1000;return Math.round(Math.abs((d1.getTime() - d2.getTime()) / day));}};module.exports = Object.create(utils);