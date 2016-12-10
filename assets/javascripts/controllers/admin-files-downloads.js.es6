/**
 * 2016-12-10
 * Раньше здесь стояло Ember.ArrayController.extend
 * Однако вчера заметил, что такой синтаксис уже не работает со свежей версией ядра,
 * и в самом ядре изменение Ember.ArrayController.extend на Ember.Controller.extend
 * произошло 2016-10-21 в коммите https://github.com/discourse/discourse/commit/bf9153
 * https://github.com/discourse/discourse/compare/2a61cc...bf9153
 *
 * Документация Ember.js: http://emberjs.com/deprecations/v1.x/#toc_arraycontroller
 * «Just like Ember.ObjectController, Ember.ArrayController will be removed in Ember 2.0
 * for the same reasons mentioned in 1.11's ObjectController deprecation.»
 *
 * Изменения выполнил по образцу со админстративным списком резервных копий.
 *
 * Файл 1 (контроллер): app/assets/javascripts/admin/controllers/admin-backups-index.js.es6
 * До: https://github.com/discourse/discourse/blob/2a61cc/app/assets/javascripts/admin/controllers/admin-backups-index.js.es6
 * После: https://github.com/discourse/discourse/blob/bf9153/app/assets/javascripts/admin/controllers/admin-backups-index.js.es6
 * Сравнение: https://github.com/discourse/discourse/compare/2a61cc...bf9153#diff-6fe0d75b17ce6f090dbdf2f374457b5a
 *
 * Файл 2 (шаблон *.hbs): app/assets/javascripts/admin/templates/backups_index.hbs
 * До: https://github.com/discourse/discourse/blob/2a61cc/app/assets/javascripts/admin/templates/backups_index.hbs
 * После: https://github.com/discourse/discourse/blob/bf9153/app/assets/javascripts/admin/templates/backups_index.hbs
 * Сравнение: https://github.com/discourse/discourse/compare/2a61cc...bf9153#diff-dbe96be2075fe79f299e5f0c9da57de5
 */
export default Ember.Controller.extend({
	_init: function() {this.set('currency', 'USD');}.on('init')
});